# ConcursoAI — Frontend

Interface web da plataforma ConcursoAI, desenvolvida com Next.js e React.

O frontend é responsável pela experiência de interação do estudante com a plataforma. A comunicação com o backend é realizada por meio da API FastAPI, mantendo as responsabilidades de autenticação, regras de negócio, persistência e orquestração da IA no servidor.

## Tecnologias

- **Next.js 16.4.5** — framework da aplicação web.
- **React 19.3.0** — biblioteca de interface.
- **TypeScript 5** — tipagem estática.
- **Tailwind CSS 4** — estilização.
- **ESLint 9** — análise estática do código.

## Pré-requisitos

- Node.js e npm instalados.
- Backend do ConcursoAI configurado, quando a funcionalidade utilizada depender da API.

## Instalação

A partir deste diretório, instale as dependências:

```bash
npm install
```

## Configuração

O frontend utiliza a variável de ambiente `BACKEND_API_URL` para definir o endereço da API FastAPI.

Crie um arquivo `.env.local` neste diretório:

```env
BACKEND_API_URL=http://localhost:PORTA_DO_BACKEND
```

Substitua `PORTA_DO_BACKEND` pela porta configurada no ambiente do backend.

Essa variável é utilizada no servidor Next.js para realizar a comunicação com a API. Não deve ser exposta como variável pública (`NEXT_PUBLIC_`).

## Executando em desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

## Verificações

Executar o ESLint:

```bash
npm run lint
```

Gerar a versão de produção:

```bash
npm run build
```

Executar a versão de produção:

```bash
npm run start
```

O comando `npm run start` deve ser executado após a geração do build.

## Estrutura do projeto

```text
frontend/
├── app/
│   ├── components/
│   │   ├── api-status.tsx
│   │   └── dashboard.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
└── README.md
```

A estrutura poderá evoluir conforme a implementação dos módulos da plataforma.

## Integração com o backend

A comunicação com o backend acontece por meio de requisições HTTP realizadas no servidor Next.js.

O componente `ApiStatus` consulta o endpoint `/health` da API para verificar sua disponibilidade.

O frontend não deve acessar diretamente o banco de dados nem armazenar credenciais de provedores de IA. Essas responsabilidades pertencem ao backend.