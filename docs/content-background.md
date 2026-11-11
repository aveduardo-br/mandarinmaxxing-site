# Handoff para o site do mandarinmaxxing

Este arquivo reúne o que a skill faz, as decisões que já tomamos e ideias para a página. O próximo passo é conversar sobre o texto e a estrutura do site. A implementação e a publicação do site ficam para depois dessa conversa.

## O projeto em uma frase

O **mandarinmaxxing** é uma skill para estudar mandarim no chat com vocabulário do **HSK 3.0**, agrupado por tema e situação, e praticar expressões que você pode reutilizar no dia a dia.

Esta é a descrição em inglês já publicada no GitHub. Ela também serve de ponto de partida para o site.

> A topic-based way to study Mandarin with HSK 3.0 vocabulary and phrases you can use in everyday conversations.

## A ideia do método

Quem estuda seguindo a ordem de um livro preparatório para o HSK pode encontrar palavras relacionadas em capítulos diferentes. O mandarinmaxxing usa o vocabulário do HSK 3.0 como referência e monta as aulas em torno de palavras que fazem sentido juntas. É uma opção para quem prefere estudar por temas e pelas situações em que vai usar o que aprendeu. Se o site mencionar livros ou cursos HSK, descreva a diferença de organização com neutralidade.

O agrupamento é só metade da ideia. Cada aula ensina **chunks**, que são expressões curtas e padrões de frase que você pode usar de novo em outras situações. A pessoa primeiro vê como as palavras funcionam juntas, depois tenta usá-las em traduções e volta a encontrá-las em um diálogo. Palavras e expressões de aulas anteriores reaparecem em contextos novos quando encaixam naturalmente.

O projeto começou como um curso pessoal em português, organizado em 67 aulas com vocabulário cumulativo dos níveis 1 e 2 do HSK 3.0 e alguns extras identificados. A skill pública generaliza a ideia. Cada pessoa escolhe o nível e o ritmo, e recebe um plano próprio. Se usar a história pessoal no site, trate-a como origem do projeto. Os números desse curso pertencem ao exemplo pessoal.

## O que acontece na primeira conversa

- Uma abertura curta explica o agrupamento por situação, os chunks e o fluxo da aula. A introdução funciona sem uma explicação específica sobre o HSK 1.
- O aluno escolhe o nível do **HSK 3.0**, o ritmo e se quer configurar áudio. Quem já estudou pode escolher um ponto mais adiante após ver o índice. O início padrão é a Aula 01.
- Os ritmos são **leve** (1–4 itens novos por aula), **padrão** (5–7) e **intensivo** (8–10). Quando a pessoa deixa ritmo ou áudio em aberto, a skill usa o ritmo padrão e começa com leitura.
- A skill usa o idioma que a pessoa pede ou o que ela já está usando na conversa para instruções, traduções, perguntas e feedback. O mandarim aparece em caracteres simplificados, com pinyin marcado por tons quando serve de referência.
- A skill usa o programa oficial do HSK ou a lista fornecida pelo aluno para criar um **índice de aulas numeradas** por tema e ritmo. O padrão é cobrir o vocabulário introduzido no nível escolhido. Um plano cumulativo pode ser solicitado. O índice registra as palavras-alvo, identifica extras e pode ser salvo em Markdown.
- Para retomar em um novo chat, o aluno anexa o índice salvo e informa o número da aula. Também pode pedir uma revisão numerada ou mais exercícios sobre uma dificuldade que apareceu. O progresso de memorização pode ser acompanhado à parte, no Anki ou no caderno.

## Como funciona uma aula

| Etapa | O que o aluno faz |
| --- | --- |
| **1. Revisão rápida** | Responde a pelo menos cinco perguntas curtas, uma por vez, cobrindo o vocabulário da aula anterior. Material mais antigo volta por volta de 3, 7 e 14 aulas, quando couber. Sem conteúdo anterior para revisar, a aula começa pelo vocabulário novo. |
| **2. Vocabulário e chunks** | Vê uma tabela com hanzi, pinyin e significado no próprio idioma. Nas expressões úteis, vê o hanzi, o pinyin na linha seguinte e depois o significado. |
| **3. Tradução escrita** | Traduz para o mandarim uma frase por vez, com ao menos um exercício dedicado a cada item novo. A skill corrige e envia o próximo na mesma mensagem. As primeiras frases podem ser curtas. Com mais repertório, aparecem mensagens conectadas que combinam expressões novas e conhecidas. No fim, a pessoa pode pedir outra rodada ou seguir para o diálogo. |
| **4. Diálogo e compreensão** | Ouve ou lê de um a três diálogos curtos entre duas pessoas. Recebe todas as perguntas de cada diálogo juntas e responde em bloco. A skill corrige as respostas. Depois da tentativa, o aluno pode pedir o texto de referência com pinyin e tradução. |

Quando a tradução está natural, a skill confirma e avança. Se a ideia está certa mas a frase soa pouco natural, mostra uma alternativa e explica brevemente a mudança. Quando há um erro, apresenta a correção em hanzi, com o pinyin abaixo e um glossário curto dos chunks relevantes. A prática de pronúncia e tons fica com o aluno, por exemplo com um professor.

Toda palavra nova deve aparecer tanto na tradução escrita quanto em um chunk útil no conjunto de diálogos da aula. O roteiro é conferido antes de gerar o áudio para verificar se a troca soa natural e se as perguntas podem ser respondidas pelo que foi dito. A meta é cerca de **20 segundos por clipe**, com liberdade para variar. A duração curta ajuda a manter o exercício focado na compreensão.

## Áudio e apresentação do hanzi

**Áudio.** A conexão é opcional, mas a skill recomenda fortemente a escuta para praticar como os chunks soam em conversas. O **ElevenLabs** é a primeira indicação para diálogos de duas vozes. O aluno pode conectar outro provedor compatível. Se o áudio estiver indisponível, a skill avisa e mostra o diálogo diretamente no chat, em **hanzi sem pinyin**, seguido das perguntas. O pinyin pode vir na correção após a tentativa. Evite prometer disponibilidade, gratuidade ou cota de qualquer provedor na página. [ElevenLabs](https://elevenlabs.io/mcp)

**Hanzi.** Na tabela de vocabulário embutida, quando o chat suporta o formato, os caracteres são selecionáveis e têm **2,5× o tamanho base**. Pinyin e significados ficam no tamanho normal. A fonte do sistema é o padrão. A skill recomenda **Kaiti SC Bold** no Mac ou **AR PL KaitiM GB** no Windows. As formas se aproximam da escrita cuidadosa à mão e ajudam a distinguir os traços na hora de estudar e anotar os caracteres. A pessoa escolhe usar uma fonte após instalá-la. Se ela não carregar, volta a fonte do sistema no mesmo tamanho na tabela HTML. A apresentação em interfaces que só renderizam Markdown varia. [Font Book no Mac](https://support.apple.com/en-ie/guide/font-book/fntbk1000/mac) · [AR PL KaitiM GB (`gkai00mp.ttf`)](https://ctan.org/tex-archive/fonts/arphic-ttf)

## Instalação e links para a página

A versão publicada quando este documento foi escrito é **v0.1.13**. O link de download do Claude aponta para a versão mais recente. Vale conferir os caminhos de instalação e os nomes dos menus antes de publicar a página. [GitHub](https://github.com/aveduardo-br/mandarinmaxxing) · [Releases](https://github.com/aveduardo-br/mandarinmaxxing/releases)

| Onde a pessoa quer usar | Caminho documentado |
| --- | --- |
| **Claude no navegador ou desktop** | Baixar o ZIP e importar como skill personalizada. O README também tem um prompt para salvar a skill pelo chat em interfaces que oferecem essa função. [Baixar ZIP do Claude](https://github.com/aveduardo-br/mandarinmaxxing/releases/latest/download/mandarinmaxxing-claude.zip) |
| **Claude Code local** | Conferir Node e `npx` na pasta de estudo, rodar o comando do Claude Code no terminal e abrir a skill com `/mandarinmaxxing`. |
| **Codex local** | Conferir Node e `npx` na pasta de estudo, rodar o comando do Codex no terminal e chamar a skill com `$mandarinmaxxing`. |
| **ChatGPT** | O repositório documenta como montar o ZIP do plugin para teste local. Confirme o status da distribuição pública antes de divulgar um botão de instalação para o ChatGPT. |

Para o caminho local, o README documenta **Node.js 22.20.0 ou mais recente** e um `npx` funcional. As verificações são `node --version` e `npx --version`. Os comandos são para o terminal local na pasta de estudo. O Claude no navegador tem o caminho separado do ZIP. [Instruções de instalação](https://github.com/aveduardo-br/mandarinmaxxing#install)

```sh
# Claude Code
npx skills add aveduardo-br/mandarinmaxxing --skill mandarinmaxxing -a claude-code

# Codex
npx skills add aveduardo-br/mandarinmaxxing --skill mandarinmaxxing -a codex
```

## Direção para a página

O site é um projeto pessoal, com acesso à skill sem cobrança e espaço para caprichar no texto e nas demonstrações. O usuário quer o comando de instalação fácil de encontrar no topo. As demos podem morar no site, enquanto quem abre a skill no chat vai direto para a configuração do próprio curso.

- **Topo.** Nome em minúsculas, uma frase explicando a proposta e acesso imediato à instalação. Uma opção é usar a descrição aprovada do GitHub como ponto de partida e oferecer **Download for Claude** ao lado de **Copy install command**, com o destino do comando identificado. O GitHub serve como link para o código e a documentação.
- **Método.** Explicar em linguagem comum como o HSK 3.0 fornece o vocabulário, como a skill reúne palavras relacionadas e o que a pessoa faz com os chunks. Manter o posicionamento de opção de estudo. Deixar exemplos específicos para a seção de demo.
- **Fluxo da aula.** Mostrar as quatro etapas com exemplos curtos o bastante para a pessoa imaginar uma sessão no chat. Explicar os ritmos e a configuração perto do botão para começar ou em uma seção curta de instalação.
- **Demo.** Mostrar uma única situação do começo ao fim em alguns trechos. Pode ser um recorte de um tema como transporte, com uma tabela pequena, um chunk reaproveitável, uma tradução com feedback e um diálogo curto. Se houver áudio, usar um clipe pronto que a pessoa possa ouvir sem configurar provedor. Identificar a demo como amostra. A situação e o formato finais ainda podem ser escolhidos.
- **Dúvidas práticas.** Se fizer sentido na página, responder onde funciona, se precisa de áudio, como voltar em outro chat e se precisa instalar uma fonte. A introdução pode ficar livre de detalhes técnicos, da comparação entre níveis do HSK e dos passos de configuração do provedor.

A documentação pública atual está em inglês. Inglês é o ponto de partida sugerido para a página, com liberdade para discutir português ou uma versão bilíngue. O idioma do site é uma decisão editorial. A skill continua conversando no idioma do aluno.

Para a comunicação pública, descreva o que a pessoa consegue fazer em uma aula. Evite promessas de fluência, certificação, superioridade pedagógica, avaliação de pronúncia ou funcionamento idêntico em todos os chats. A skill usa a lista do HSK 3.0 como referência e é um projeto independente. Se a página mencionar custo, deixe claro que a skill está disponível sem cobrança e que o provedor de áudio pode ter seus próprios planos.

## Fontes para conferir ao escrever

- [README publicado](https://github.com/aveduardo-br/mandarinmaxxing#readme) para instalação, explicação ao público e apresentação da aula.
- [SKILL.md publicado](https://github.com/aveduardo-br/mandarinmaxxing/blob/main/skills/mandarinmaxxing/SKILL.md) para o comportamento atual da skill. Em caso de divergência com os rascunhos anteriores, use este arquivo.
- [Programa oficial do HSK](https://www.chinesetest.cn/HSK) para o vocabulário e os níveis usados como base.
- No workspace, o curso pessoal está na raiz do projeto Mandarim (`METODO.md`, `README.md` e `aulas/`). A skill pública fica na pasta `mandarinmaxxing/`. O `PLAN.md` local registra propostas antigas, incluindo um setup exclusivamente em inglês e um fallback de áudio via roteiro. Para a página, considere a versão publicada, que usa o idioma do aluno e a leitura direta em hanzi.

## Mensagem para abrir o novo chat

> Quero criar o site do mandarinmaxxing. Use o handoff anexado e o repositório público como referência. Vamos começar pela estrutura e pelo texto da página, incluindo o topo, como funciona o método, uma sugestão de demo e os caminhos de instalação. Quero que a página apresente o projeto como uma opção para estudar mandarim com vocabulário do HSK 3.0 agrupado por tema e com prática de expressões do dia a dia. Escreva o texto público em inglês e converse comigo em português. Me ajude a decidir o que entra no site antes de começar a implementar.
