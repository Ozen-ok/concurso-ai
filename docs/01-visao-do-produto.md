# Visão do produto

> **Nome provisório:** ConcursoAI é o nome usado atualmente no repositório, mas não representa uma decisão definitiva de marca.
>
> **Natureza deste documento:** esta é uma visão conceitual do produto. Ela registra decisões de produto e possibilidades futuras; não descreve funcionalidades já entregues nem define, por si só, o escopo fechado do MVP.

## 1. Visão geral e propósito

A proposta é construir uma plataforma pessoal e flexível de aprendizagem, apoiada por inteligência artificial. O ponto de partida é a preparação para concursos, com potencial para atender também OAB, Medicina, vestibulares, certificações e aprendizagem em diferentes áreas.

A plataforma deve funcionar como um ambiente de aprendizagem que acompanha o percurso do estudante: seus objetivos, materiais, conversas, sessões e progresso. A tutora é parte importante dessa experiência, mas o produto não se resume a um chatbot de perguntas e respostas.

## 2. Problema a resolver

Estudantes frequentemente precisam organizar materiais e objetivos em ferramentas separadas, descobrir o que ainda não compreenderam e decidir como avançar. Uma resposta pontual pode resolver uma dúvida imediata sem revelar uma lacuna de fundamento, uma justificativa frágil ou a necessidade de revisar um conceito.

O produto pretende reunir contexto, estudo e acompanhamento para ajudar cada pessoa a aprender com continuidade, sem exigir que todo o conhecimento seja previamente organizado em uma estrutura rígida de disciplinas e tópicos.

## 3. Público-alvo e contextos

O público principal são pessoas que estudam individualmente e precisam de apoio adaptado aos próprios objetivos e ao próprio ritmo. O primeiro contexto é a preparação para concursos públicos. A concepção também deve permitir outros usos, como OAB, residência médica, vestibulares, certificações e estudo de áreas diversas.

O produto é pensado inicialmente para uso individual: cada conta representa um espaço pessoal de aprendizagem. A plataforma comporta vários usuários, mas não pressupõe compartilhamento entre contas. Funcionalidades para professores, turmas ou instituições não fazem parte do escopo atual.

## 4. Proposta de valor e princípios

- **Aprendizagem acompanhada:** apoiar o raciocínio e a compreensão ao longo do tempo, além de responder dúvidas isoladas.
- **Adaptação ao estudante:** ajustar linguagem, profundidade, exemplos e estratégia pedagógica ao contexto e às necessidades observadas.
- **Flexibilidade de organização:** permitir estudar com ou sem uma matéria selecionada, sem impor uma árvore fixa de assuntos e subassuntos.
- **Estudante ativo:** dar espaço para a pessoa tentar e explicar seu raciocínio antes de receber uma resposta pronta.
- **Conhecimento com contexto:** usar objetivos, instruções, materiais e histórico de aprendizagem de forma pertinente ao ambiente em que a pessoa está estudando.
- **Organização corrigível:** permitir revisar e corrigir a organização sugerida pela IA; mudanças importantes e persistentes devem ter revisão e aprovação do usuário.
- **Privacidade desde a concepção:** separar os dados de cada pessoa e tornar explícito como materiais, conversas e progresso são usados.

## 5. Ambientes de aprendizagem

Cada usuário poderá criar vários ambientes de aprendizagem. Um ambiente reúne o contexto necessário para uma finalidade específica, como preparar-se para a OAB, um concurso público ou uma residência médica. Poderá conter objetivos, preferências, contexto e instruções pedagógicas próprias.

Um ambiente não precisa ter disciplinas. O usuário poderá iniciar uma sessão diretamente, sem escolher uma matéria. Se matérias forem utilizadas, serão opcionais; a organização não deverá depender de uma taxonomia rígida de tópicos e subtópicos.

Uma matéria poderá ser reutilizada em diferentes ambientes do mesmo usuário, sem exigir cadastros duplicados. A associação da matéria a cada ambiente poderá ter configurações próprias, sem duplicar a definição da matéria.

Os ambientes pertencem ao usuário que os criou. O modelo de compartilhamento entre pessoas não está definido e não deve ser presumido.

## 6. Tutora inteligente

A tutora deverá adaptar sua atuação ao ambiente e às necessidades do estudante. A abordagem esperada é pedagógica e progressiva:

1. Entender a pergunta e o contexto de aprendizagem relevante.
2. Quando houver uma questão ou desafio, permitir que o estudante tente antes de revelar a resposta.
3. Avaliar separadamente a resposta apresentada e a justificativa que a sustenta.
4. Identificar lacunas de conhecimento ou sinais de compreensão incompleta.
5. Ensinar fundamentos quando necessário ou aprofundar a explicação quando o estudante já dominar a base.

O núcleo pedagógico deve ser reutilizável entre áreas. Personalizar a tutoria não significa criar um sistema independente para cada disciplina: o contexto, as instruções e os materiais do ambiente devem orientar uma tutora comum.

A interação inicial será textual. Voz, imagens, simulados, questões adaptativas e outras formas de interação são possibilidades de evolução, não requisitos confirmados para a primeira entrega.

## 7. Biblioteca pessoal e gestão do conhecimento

Cada usuário poderá adicionar materiais como PDFs, livros, apostilas e outros documentos. Um material poderá ficar na biblioteca pessoal, disponível em diferentes ambientes do mesmo usuário, ou ser associado a um ambiente específico. A solução deve evitar duplicar o arquivo quando ele puder ser referenciado em mais de um contexto.

A IA poderá identificar assuntos, conceitos, relações e categorias encontrados nos materiais e nos estudos. Essa organização deve ajudar o estudante sem obrigá-lo a montar manualmente estruturas extensas. Sugestões precisam poder ser corrigidas. Alterações importantes ou atualizações persistentes no conhecimento armazenado devem passar por mecanismos de revisão e aprovação.

As classificações, categorias, assuntos e relações sugeridos pela IA devem preservar sua origem. O sistema deve distinguir sugestões automáticas, alterações feitas pelo usuário e informações provenientes dos materiais. O usuário poderá corrigir sugestões sem perder a rastreabilidade das alterações.

Formatos, limites de arquivo, extração de texto, indexação, citações internas e políticas de retenção ainda precisam ser definidos.

## 8. Pesquisa externa e atualização do conhecimento

A tutora poderá consultar fontes externas quando isso for útil. O produto deve distinguir dois tipos de ação:

- **Pesquisa pontual:** apresenta informações e referências para a conversa atual, sem modificar a biblioteca ou o conhecimento persistente do usuário.
- **Atualização persistente:** propõe incorporar conhecimento à biblioteca ou ao contexto armazenado. Inicialmente, essa mudança deverá exigir aprovação do usuário e preservar fontes, datas e versões.

Critérios de seleção das fontes, apresentação das referências e tratamento de fontes conflitantes permanecem em aberto.

## 9. Acompanhamento da aprendizagem

O sistema deverá poder acompanhar conhecimentos demonstrados, dificuldades recorrentes, qualidade das justificativas e assuntos que merecem revisão. Esse acompanhamento não deve depender exclusivamente de manter um histórico indefinidamente longo de mensagens.

Ainda é preciso definir como se relacionam dois escopos de memória: uma memória geral do usuário, com informações potencialmente úteis em diferentes ambientes, e memórias específicas de cada ambiente, ligadas a seus objetivos, materiais, progresso e dificuldades. Não se deve presumir que todas as informações de um ambiente serão compartilhadas com os demais.

Quais sinais serão registrados, como serão resumidos, por quanto tempo serão mantidos e como o estudante poderá consultar ou corrigir essa memória ainda precisam ser definidos. O acompanhamento deve respeitar o contexto do usuário e não transformar inferências da IA em avaliações definitivas sem transparência.

## 10. Privacidade e isolamento de dados

O produto é multiusuário, mas cada conta representa um espaço individual de aprendizagem. Ambientes, bibliotecas, documentos, conversas, sessões e progresso não são pressupostos como compartilhados entre contas e devem ser isolados em todas as operações. Uma pessoa não pode consultar ou alterar dados de outra por meio da aplicação.

Não há neste momento requisitos para gestão de professores, turmas ou instituições. Ainda precisam ser especificados os processos de autenticação, recuperação de conta, exclusão e exportação de dados, retenção, permissões internas e uso de serviços externos de IA ou pesquisa.

## 11. Escopo inicial e evolução

### Direcionamentos já estabelecidos

- O produto começa com interação textual.
- A experiência é individual e deve respeitar isolamento entre usuários.
- Um usuário pode manter vários ambientes com objetivos e instruções próprios.
- A sessão de estudo não depende da seleção de uma matéria.
- A tutora deve incentivar a tentativa, avaliar resposta e justificativa separadamente e adaptar a explicação.
- Uma matéria pode ser reutilizada em diferentes ambientes do mesmo usuário; configurações da associação podem variar sem duplicar a definição da matéria.
- A biblioteca poderá ser pessoal ou associada a ambientes, evitando cópias desnecessárias.
- As sugestões de organização da IA devem preservar a origem e continuar rastreáveis após correções do usuário.
- Cada conta é um espaço individual; o produto não pressupõe compartilhamento de ambientes, bibliotecas, sessões ou progresso entre contas.
- Pesquisas pontuais não alteram conhecimento persistente; atualizações persistentes devem ter fontes e aprovação inicial do usuário.

Esses direcionamentos descrevem a visão, mas **a priorização e o recorte exato do MVP ainda não foram aprovados**. Uma hipótese de primeiro ciclo a discutir é validar o fluxo textual de estudo em um ambiente pessoal, preservando a possibilidade de iniciar sem matéria e a abordagem pedagógica definida. A presença da biblioteca, pesquisa externa e memória persistente no primeiro ciclo ainda precisa de decisão explícita.

### Possibilidades de evolução

Voz, imagens, simulados, questões adaptativas e outras interações poderão ser avaliadas progressivamente. Também poderão ser ampliados a organização automática do conhecimento e o uso de fontes externas. Essas possibilidades não são compromissos de prazo nem fazem parte automaticamente do MVP.

## 12. Decisões tomadas e questões em aberto

### Decisões registradas

- O nome atual é provisório.
- O produto é concebido para aprendizagem pessoal, com potencial para vários domínios além de concursos.
- A experiência precisa suportar múltiplos ambientes por usuário e estudo sem matéria obrigatória.
- A tutoria deve priorizar o raciocínio do estudante, adaptar a pedagogia e não antecipar a resposta antes da tentativa.
- A biblioteca pode ser pessoal ou contextual; a organização automatizada deve ser corrigível.
- Pesquisa pontual e alteração persistente do conhecimento são ações distintas.
- A memória de aprendizagem deve registrar sinais úteis sem depender apenas do histórico completo da conversa.
- A interação inicial é textual; modalidades adicionais ficam para evolução posterior.

### Questões para discussão

- Qual é o recorte validável do MVP e qual domínio será usado primeiro?
- Quais etapas compõem uma sessão de estudo e quando a tutora deve pedir uma tentativa?
- Quais configurações poderão variar na associação entre uma matéria reutilizada e cada ambiente?
- Como serão definidas e comunicadas a avaliação da resposta e a avaliação da justificativa?
- Quais dados formam a memória de aprendizagem, e como o usuário poderá consultá-la, corrigi-la ou apagá-la?
- Como separar a memória geral do usuário das memórias específicas de cada ambiente, e quais informações, se houver, poderão ser reaproveitadas entre ambientes?
- Quais formatos de material entram primeiro e como serão extraídos, citados e associados a ambientes?
- Que fontes externas são aceitáveis, como serão apresentadas e como lidar com informações conflitantes?
- Como funcionará a revisão de sugestões de organização e de atualizações persistentes?
- Quais informações de origem e histórico de alterações devem ser preservadas para manter a rastreabilidade da organização do conhecimento?
- Quais políticas de retenção, exportação e exclusão de dados serão oferecidas?
- A marca final, a identidade visual e o posicionamento para além do público inicial ainda precisam ser definidos.

## 13. Estado da implementação no repositório

Esta visão não deve ser confundida com o estado atual do software. O repositório contém uma interface inicial de dashboard e uma API FastAPI com uma rota de saúde. A interface consulta essa rota para mostrar se a API está disponível. Não há ainda implementação de contas, ambientes, biblioteca, sessões de estudo, memória de aprendizagem, pesquisa externa ou tutoria com IA.
