# ConcursoAI

O ConcursoAI é uma plataforma em desenvolvimento para apoiar pessoas que se preparam para concursos públicos. A proposta é reunir uma experiência de estudos por disciplina e, futuramente, uma tutora com inteligência artificial que ajude o estudante a explorar conceitos e organizar o raciocínio.

## Problema e objetivo

Quem estuda para concursos precisa lidar com muitos conteúdos, dúvidas e sessões de estudo dispersas. O projeto pretende oferecer um espaço organizado para esse percurso, com apoio conversacional para tornar o estudo mais acompanhado e acessível.

## Proposta de funcionamento

A interface apresenta um espaço de estudos, disciplinas e uma área para atividades recentes. A visão do produto prevê uma tutora com IA para conversar sobre dúvidas e conceitos e acompanhar o raciocínio do estudante. **Essa tutoria ainda é uma proposta da interface: não há integração com um modelo de IA ou fluxo funcional de conversa implementado no repositório atual.**

## Tecnologias e arquitetura atuais

- **Frontend:** Next.js 16 com App Router, React 19, TypeScript, Tailwind CSS 4 e ESLint.
- **Backend:** API FastAPI com Pydantic Settings, SQLAlchemy assíncrono e Psycopg 3.
- **Banco de dados:** PostgreSQL 18, iniciado pelo Docker Compose e com volume persistente.
- **Migrações e testes:** Alembic e pytest; há testes para a rota de saúde e uma verificação de integração com PostgreSQL.
- **Configuração:** o Compose lê `POSTGRES_PASSWORD` do `.env` na raiz. O backend lê suas configurações de `backend/.env`; use `backend/.env.example` como referência e ajuste a URL do banco para a senha configurada localmente.

O frontend e a API são aplicações separadas, mas já existe uma integração mínima: o frontend consulta `GET /health` no backend para indicar a disponibilidade da API. Essa chamada ainda não representa um fluxo funcional de produto e não verifica a conexão com o PostgreSQL.

## Estrutura do repositório

```text
.
├── backend/
│   ├── app/
│   │   ├── api/routes/       # Rotas HTTP
│   │   ├── core/             # Configuração e suporte ao event loop no Windows
│   │   ├── db/               # Engine e sessões SQLAlchemy
│   │   └── schemas/          # Schemas da API
│   ├── alembic/              # Configuração e versões de migrações
│   ├── tests/                # Testes da API e integração com o banco
│   ├── .env.example
│   └── requirements.txt
├── frontend/
│   ├── app/                  # Página, layout, estilos e componentes
│   └── public/               # Recursos estáticos
├── docker-compose.yml        # Serviço PostgreSQL local
└── README.md
```

## Pré-requisitos

- Node.js e npm, para o frontend.
- Python 3.14, conforme indicado na documentação do backend.
- Docker com suporte ao comando `docker compose`, para iniciar o PostgreSQL.

## Instalação e execução local

### 1. Configurar e iniciar o PostgreSQL

Crie um arquivo `.env` na raiz do projeto com a variável `POSTGRES_PASSWORD` definida para uma senha local. O Compose usa esse valor para configurar o serviço `db` e publica a porta do banco somente em `127.0.0.1:5432`.

```powershell
docker compose up -d db
```

Os dados do PostgreSQL ficam no volume `postgres_data`.

### 2. Configurar e iniciar o backend

No PowerShell, a partir da raiz:

```powershell
cd backend
py -3.14 -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
Copy-Item .env.example .env
```

Edite `backend/.env` para que `DATABASE_URL` use a senha definida no `.env` da raiz e os parâmetros locais do serviço PostgreSQL. Em seguida, inicie a API:

```powershell
python -m uvicorn app.main:app --loop app.core.windows_loop:selector_loop_factory --reload
```

No Linux, a documentação do backend indica executar, a partir de `backend/`:

```bash
python -m uvicorn app.main:app --reload
```

A API fica em `http://127.0.0.1:8000`; a documentação interativa está em `/docs` e a rota de saúde em `/health`.

### 3. Iniciar o frontend

Em outro terminal, a partir da raiz:

```powershell
cd frontend
npm ci
npm run dev
```

A interface fica em `http://localhost:3000`. Os scripts disponíveis também incluem `npm run build`, `npm run start` e `npm run lint`.

### Testes do backend

Com o ambiente virtual ativo e a partir de `backend/`:

```powershell
pytest
```

O teste de integração requer o PostgreSQL local configurado em `backend/.env`.

## Estado do desenvolvimento

**Presente no repositório:** uma página inicial de frontend com componentes visuais de disciplinas e atividades recentes; uma API FastAPI com a rota `/health`; configuração de conexão assíncrona com PostgreSQL; estrutura inicial de migrações Alembic e testes.

**Ainda não implementado:** fluxo de conversa com IA, persistência de usuários ou sessões de estudo, operações de conteúdo/disciplinas na API e fluxos funcionais de produto entre frontend e backend. A interface de tutoria é atualmente demonstrativa.

## Próximos passos sugeridos

1. Definir os fluxos de estudo e os dados que precisam ser persistidos.
2. Criar modelos e migrações para usuários, conteúdos e sessões, conforme o escopo definido.
3. Implementar endpoints da API e conectá-los ao frontend.
4. Projetar e integrar a tutora com IA, incluindo configuração segura do provedor e testes do fluxo conversacional.
5. Ampliar a cobertura de testes e documentar os fluxos funcionais à medida que forem implementados.
