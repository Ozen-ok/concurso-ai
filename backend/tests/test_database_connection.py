import json
import socket
import sys
import threading
import time
from contextlib import closing
from urllib.error import URLError
from urllib.request import urlopen

from fastapi import Depends, FastAPI
from fastapi.responses import JSONResponse
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from uvicorn import Config, Server

from app.db.session import get_session
from app.main import lifespan


def _uvicorn_loop_setting() -> str:
    if sys.platform == "win32":
        return "app.core.windows_loop:selector_loop_factory"
    return "auto"


def _test_application() -> FastAPI:
    application = FastAPI(lifespan=lifespan)

    @application.get("/_integration/postgres", response_model=None)
    async def postgres_probe(
        session: AsyncSession = Depends(get_session),
    ) -> dict[str, int] | JSONResponse:
        try:
            result = await session.execute(text("SELECT 1"))
            return {"result": result.scalar_one()}
        except Exception:
            # Keep driver exceptions and connection parameters out of application logs.
            return JSONResponse(
                status_code=503,
                content={"detail": "PostgreSQL integration query failed."},
            )

    return application


def _serve(server: Server, listener: socket.socket, failures: list[str]) -> None:
    try:
        server.run(sockets=[listener])
    except BaseException as error:
        failures.append(type(error).__name__)


def _wait_for_startup(server: Server, thread: threading.Thread) -> None:
    deadline = time.monotonic() + 10
    while not server.started and thread.is_alive() and time.monotonic() < deadline:
        time.sleep(0.05)

    if not server.started:
        raise AssertionError("Uvicorn did not start with the selected event loop.")


def test_database_select_one_through_uvicorn_http() -> None:
    application = _test_application()
    config = Config(
        application,
        host="127.0.0.1",
        port=0,
        loop=_uvicorn_loop_setting(),
        log_config=None,
        log_level="critical",
        access_log=False,
    )
    server = Server(config)
    failures: list[str] = []

    with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as listener:
        listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        listener.bind(("127.0.0.1", 0))
        listener.listen()
        listener.setblocking(False)
        port = listener.getsockname()[1]

        thread = threading.Thread(
            target=_serve,
            args=(server, listener, failures),
            daemon=True,
        )
        thread.start()

        try:
            _wait_for_startup(server, thread)
            with urlopen(f"http://127.0.0.1:{port}/_integration/postgres", timeout=10) as response:
                result = json.loads(response.read())
                assert response.status == 200
                assert result == {"result": 1}
        except URLError as error:
            raise AssertionError(
                f"HTTP integration request failed ({type(error).__name__})."
            ) from None
        finally:
            server.should_exit = True
            thread.join(timeout=10)
            if thread.is_alive():
                server.force_exit = True
                thread.join(timeout=2)

    assert not thread.is_alive(), "Uvicorn did not shut down cleanly."
    assert not failures, f"Uvicorn stopped unexpectedly ({', '.join(failures)})."
