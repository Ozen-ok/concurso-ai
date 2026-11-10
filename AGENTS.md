# Convenções do projeto ConcursoAI

Estas instruções se aplicam ao repositório inteiro. Instruções locais em diretórios descendentes podem acrescentar orientações específicas; em caso de conflito, preserve as regras mais específicas compatíveis com estas convenções.

## Antes de alterar

- Consulte `docs/01-visao-do-produto.md`, `docs/02-arquitetura-de-software.md` e `docs/03-plano-do-mvp.md` antes de modificar funcionalidades ou arquitetura. Leia também as instruções locais e os arquivos de configuração relevantes ao trabalho.
- Preserve o escopo aprovado, a arquitetura de monólito modular e as tecnologias presentes. Não transforme possibilidades futuras em funcionalidades assumidas.
- Não introduza dependências, serviços, abstrações, provedores ou mudanças de stack sem necessidade demonstrada e autorização compatível com a tarefa.
- Faça somente alterações necessárias ao pedido. Não edite arquivos fora do escopo solicitado.

## Idioma e nomenclatura

- Use inglês para nomes de arquivos e diretórios de código, módulos, classes, funções, variáveis, interfaces, schemas, tabelas e colunas. Siga as convenções idiomáticas de cada linguagem e evite misturar idiomas em um mesmo identificador. Nomes de documentos existentes em português não precisam ser renomeados.
- Comentários técnicos podem ser em inglês; mantenha consistência com o código próximo.
- Escreva documentação de produto, arquitetura, planejamento e decisões em português brasileiro. Preserve termos técnicos consolidados em inglês quando forem mais precisos e explique conceitos importantes na primeira ocorrência quando necessário.
- Use português brasileiro nos textos apresentados pela interface. Mantenha conteúdo de interface separado da lógica de negócio sempre que apropriado.

## Arquitetura e segurança

- Mantenha regras de negócio e pedagógicas separadas de infraestrutura e integrações externas. O backend é responsável por autorização, consistência das relações entre registros, validação e persistência.
- Integrações com provedores de IA devem passar pelos contratos e adaptadores documentados; não acople regras de negócio a SDKs de fornecedores.
- Não exponha credenciais no frontend, em respostas, logs ou documentação. Não confie somente em instruções de prompt ou controles visuais para aplicar regras de segurança e pedagogia.
- Preserve isolamento entre contas e a proveniência de dados e avaliações conforme os documentos do projeto.

## Verificação e comunicação

- Após mudanças de código, execute as verificações pertinentes já disponíveis no projeto e informe exatamente o que foi e não foi executado. Não afirme resultados sem evidência.
- Não crie testes, dependências ou ferramentas de verificação fora do escopo solicitado.
- Ao concluir, resuma arquivos alterados, decisões relevantes, validações executadas e limitações ou pendências encontradas.
