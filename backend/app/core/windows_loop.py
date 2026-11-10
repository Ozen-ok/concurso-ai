"""Event loop factory for Windows deployments using async Psycopg."""

import asyncio
import selectors
import sys


def selector_loop_factory() -> asyncio.AbstractEventLoop:
    """Create the SelectorEventLoop required by Psycopg's async driver on Windows."""
    if sys.platform != "win32":
        raise RuntimeError("This event loop factory is only intended for Windows.")

    return asyncio.SelectorEventLoop(selectors.SelectSelector())
