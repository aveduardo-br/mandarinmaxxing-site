# Handoff: site mandarinmaxxing

Ponto de partida para o próximo chat que mexer no site. Leia este arquivo inteiro antes de começar.

- **Converse com o Eduardo em português.** Todo o texto público do site é em inglês.
- **O site já está construído e no ar**, com a copy reescrita para a skill v0.3.0. A próxima fase é de design.

## Links

- **Site no ar:** https://mandarinmaxxing-site.vercel.app
- **Repositório do site:** `aveduardo-br/mandarinmaxxing-site` (Astro 5). Cada push na `main` publica sozinho na Vercel, em cerca de 1 minuto.
  - Projeto na Vercel: `prj_tWI1Nl7UFscpAWkMAg2U6Y8lPDzt`, time `team_iF6SzN2M0FmIrVc7h5KJK22G`.
- **Repositório da skill:** https://github.com/aveduardo-br/mandarinmaxxing. É a fonte da verdade sobre o que o produto faz. Leia o `SKILL.md` e o README de lá antes de propor texto.
- **Contexto de produto e conteúdo:** `docs/content-background.md`. Cobre o que a skill faz, a primeira conversa, como é uma aula, o tom e o que não prometer.
- **Design original:** Paper, arquivo `01M73ZX4CG7GXQAC76RFJZ8R94`. O site já evoluiu além dele, então para o texto vale o que está no código.

## Objetivo desta fase

O Eduardo acha a copy atual "decente, mas pode melhorar muito". O texto não reflete bem o produto, e os tópicos podem ser mais bem organizados.

Processo combinado:
1. **Diagnóstico.** Ler todo o texto atual (lista de arquivos abaixo) e listar o que cada seção tenta dizer, o que se repete, o que falta e o que está fora de ordem.
2. **Fundamentos.** Fazer poucas perguntas ao Eduardo: para quem é o site, a promessa principal em uma frase, o tom e um ou dois sites cuja escrita ele admira.
3. **Nova estrutura.** Propor a ordem e o papel de cada seção antes de escrever frases. Mudar, juntar ou cortar seções é permitido.
4. **Reescrita num documento** (Claude Docs), seção por seção, para ele comentar. Não mexer no site ainda.
5. **Aplicar no site** depois da aprovação. Conferir no navegador como o texto fica no layout.

Use a skill `design:ux-copy` para revisar títulos, botões e frases curtas.

## Onde o texto mora no código

Ordem da página (`src/pages/index.astro`): Hero, 01 What it is, 02 Situations, not chapters, 03 Chunks, 04 Every lesson follows the same four steps, 05 Your course, 06 Install, FAQ, Footer.

| Parte | Arquivo |
| --- | --- |
| Títulos das seções, side nav, FAQ, versão e links da skill | `src/data/site.ts` |
| Hero (frase, botões, meta linha) | `src/components/Hero.astro` |
| 01 What it is | `src/components/sections/WhatItIs.astro` |
| 02 Situations (intro, comparação com o livro, lista) | `src/components/sections/Topics.astro`, dados em `src/data/situations.ts` |
| 03 Chunks | `src/components/sections/Chunks.astro` |
| 04 Lesson (bento com 5 cards) | `src/components/sections/Lesson.astro`, mais `QuickReview`, `SpacedReview`, `TranslationChat` e `DialogueCard` |
| 05 Your course | `src/components/sections/Course.astro` |
| 06 Install | `src/components/sections/Install.astro` |
| 07 FAQ | `src/components/sections/Faq.astro` + `faq` em `site.ts` |
| Footer | `src/components/Footer.astro` |

Os títulos da side nav vêm de `sections` em `site.ts`. Se um título mudar, mude ali também.

## Regras de conteúdo

- **Fatos sobre HSK verificados.** As palavras dos tópicos foram checadas contra a lista do New HSK 4 (HSK 3.0). A lição do livro (HSK Standard Course 4A, Lesson 1 "简单的爱情") foi checada e tem fonte. Não invente números nem palavras.
- **Comparação com livros HSK com neutralidade.** É uma organização diferente, não "melhor".
- **Não prometer** fluência, resultado em prova nem nada que a skill não faz (veja `docs/content-background.md`).
- O curso pessoal do Eduardo (67 aulas, HSK 1–2) é a origem do projeto, não um número do produto.

## Preferências do Eduardo

- **Simples e limpo.** Frases curtas e diretas, sem jargão de marketing.
- Ele quer ver opções antes de mudanças grandes, e valida vendo.
- **Não mexer em design nem em animação nesta fase**, a não ser que ele peça. Ele rejeita coisas que ficam "travadas" ou coloridas demais.
- **Fontes:** Geist Light no texto corrido, Geist 600 nos títulos (`.display`) e Ma Shan Zheng em todos os hanzi. Ele quer a mesma fonte de hanzi em todo o site.

## Estado atual (13/11/2026)

A copy foi reescrita para a skill v0.3.0, com o messaging de `docs/messaging.md`.

- **Hero:** frase principal nova. O bloco do comando de terminal saiu; os botões são download e "How to install".
- **02 Situations, not chapters:** mostra o mapa real do HSK 1 (22 aulas, 300 palavras), gerado do repositório da skill em `src/data/situations.ts`. A barra é a lista oficial do HSK 1, um quadrado por palavra, na ordem do syllabus. O exemplo do livro é a Lição 3 do HSK Standard Course 2, conferida na fonte.
- **03 Chunks e 04 (bentos):** mesmos componentes, com palavras do HSK 1. As frases de Chunks só usam caracteres que existem em `public/fonts/zpix-site.woff`.
- **05 Your course:** substitui "Pace and audio". Nível, ritmo (3 / 5 / 7 ou outro número), áudio e idioma.
- **06 Install:** quatro passos para o app do Claude, áudio opcional e uma linha para Claude Code e Codex.
- **FAQ:** reescrito. A primeira resposta é a única em primeira pessoa.

**Em aberto**

- **Card 04 do bento (áudio).** O exemplo ainda é o diálogo de duas vozes no restaurante. A skill agora gera um texto curto de uma voz (Sarah). Falta regravar o áudio e refazer os tempos em `DialogueCard.astro`.
- O Eduardo disse que quer a mesma fonte em todos os hanzi. Os traços animados dos ritmos (轻松 / 标准 / 强化) não usam a Ma Shan Zheng.
- Ao mudar o mapa da skill, gere `src/data/situations.ts` de novo e atualize `SKILL_VERSION` em `src/data/site.ts`.

## Próxima fase: design, com o Paper como fonte da verdade

O Eduardo quer revisitar o site no Paper (arquivo `01M73ZX4CG7GXQAC76RFJZ8R94`) e deixar o Paper como fonte da verdade do design. Hoje o código está à frente do Paper: a copy e três seções mudaram só no código.

Processo sugerido:
1. Trazer para o Paper o estado atual do site (texto novo, seções Your course e Install).
2. Redesenhar no Paper, seção por seção, mostrando opções ao Eduardo.
3. Só depois levar para o código.

Levantamento de 13/11/2026, feito pelo código e pelo texto renderizado, sem ver o layout. Confirme olhando o site antes de agir.

| Seção | Estado | O que fazer |
| --- | --- | --- |
| Hero | Bom | Ver se ficou vazio sem a caixa do comando; talvez uma linha de apoio sob a frase. |
| 01 What it is | Fraco: três parágrafos de texto puro | Encurtar ou trocar por uma imagem de uma aula real no chat. |
| 02 Situations | Forte | A lista de 22 linhas ficou longa: mostrar as 7 do jump start e um "ver as 22". |
| 03 Chunks | Bom | Nada urgente. |
| 04 Bentos | Bom, com um card errado | Card 4: regravar o áudio com uma voz (Sarah) e refazer os tempos. |
| 05 Your course | Fraco no visual | Mostrar a mensagem de setup e a lista de aulas como aparecem no chat. |
| 06 Install | Funcional, sem revisão de design | Uma captura da tela do Claude em cada passo. |
| FAQ | Texto bom, layout simples | Acordeão. |
| Footer | Incompleto | Licença e link para reportar problema. |

Na página inteira:
- **Celular.** Não há versão para tela pequena; só a side nav se adapta. É o problema mais grave.
- **Imagem de compartilhamento e favicon.** Não existem.
- **Uma aula de verdade.** Em nenhum lugar aparece a tabela real da skill, com a fonte Kaiti.
- **Domínio próprio.**
- Listas reais já existem para o HSK 1. Quando houver mapa do HSK 2, decidir se o site mostra os dois níveis.

Prioridade sugerida: celular, imagem de compartilhamento e favicon, card 4, Your course e Install, What it is e FAQ.

## Mensagem para abrir o novo chat

> Quero revisar o design do site mandarinmaxxing no Paper e deixar o Paper como fonte da verdade. O repositório é `aveduardo-br/mandarinmaxxing-site` e o site está em https://mandarinmaxxing-site.vercel.app. Leia o `HANDOFF.md`, principalmente a seção "Próxima fase", abra o site no navegador para ver o layout e me mostre opções antes de mudar. Converse comigo em português; o texto do site é em inglês.
