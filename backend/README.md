# ConcursoAI Backend

Backend da plataforma ConcursoAI, preparado com FastAPI, Pydantic v2, SQLAlchemy assíncrono e PostgreSQL.

## Preparação

Use Python 3.14 e, a partir desta pasta, instale as dependências no ambiente virtual:

```powershell
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
Copy-Item .env.example .env
```

Edite `DATABASE_URL` em `.env` para corresponder às credenciais do PostgreSQL local. O `.env.example` usa uma senha fictícia e não contém credenciais reais.

## Executar no Windows

```powershell
python -m uvicorn app.main:app --loop app.core.windows_loop:selector_loop_factory --reload
```

O Psycopg 3 assíncrono requer `SelectorEventLoop` no Windows. A factory é específica para essa inicialização; não altera a configuração padrão usada no Linux.

## Executar no Linux

```bash
python -m uvicorn app.main:app --reload
```

Em produção Linux, use o mesmo comando sem `--reload`. O Uvicorn mantém sua seleção padrão `auto`, incluindo o uso de uvloop quando instalado.

Nos dois sistemas, a API fica disponível em `http://127.0.0.1:8000`, com documentação interativa em `/docs` e endpoint de saúde em `/health`.

## Migrações

O Alembic está configurado para migrações assíncronas. Quando houver modelos, crie uma revisão a partir desta pasta com:

```powershell
alembic revision --autogenerate -m "descricao"
alembic upgrade head
```

## Testes

```powershell
pytest
```

O teste de integração `tests/test_database_connection.py` inicia um Uvicorn temporário, envia uma requisição HTTP a uma rota exclusiva de teste, executa `SELECT 1` por meio da dependência SQLAlchemy e encerra o servidor e a engine pelo lifespan da aplicação. No Windows, usa a factory de Selector; no Linux, testa o loop `auto` padrão. Para prepará-lo, copie `.env.example` para `.env` e configure `DATABASE_URL` com as credenciais do serviço `db` definido no `docker-compose.yml`.

Para executar apenas a verificação da conexão:

```powershell
python -m pytest tests/test_database_connection.py -q --tb=no
```
