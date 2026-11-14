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
- Ele gosta das seções Situations, Chunks e dos bentos: reaproveitar, não refazer. Ele rejeita coisas que ficam "travadas" ou coloridas demais.
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
- Ao mudar o mapa da skill, gere `src/data/situations.ts` de novo e atualize `SKILL_VERSION` em `src/data/site.ts`.

## Próxima fase: design, com o Paper como fonte da verdade

O Eduardo quer revisitar o site no Paper (arquivo `01M73ZX4CG7GXQAC76RFJZ8R94`) e deixar o Paper como fonte da verdade do design. Hoje o código está à frente do Paper: a copy e três seções mudaram só no código.

**Leia `docs/ladrilhos.md` antes de desenhar.** Ele guarda a identidade visual de ladrilhos que o Eduardo aprovou na seção 05 (medidas, cores, etiquetas, seletores) e o raciocínio para aplicar o mesmo formato às outras seções.

Estado em 14/11/2026:
- A página do Paper "Site — atual (v0.3.0)" tem o site seção por seção. A coluna da esquerda é a versão ativa; propostas e versões anteriores ficam ao lado.
- **No código (branch `ladrilhos-sections`):** 02 com dez situações de exemplo, 03 Chunks em escada de ladrilhos, card 02 da seção 04 com o chunk em ladrilhos, 05 Your course com o número em ladrilhos. Decisões e regras em `docs/ladrilhos.md`.
- **Sem mudança nesta rodada:** Hero, 06 Install e FAQ. Há propostas ao lado no Paper, mas o Eduardo ainda vai fazer artes para elas.

Processo:
1. Redesenhar no Paper, uma seção por vez, mostrando opções ao Eduardo. Não apagar quadros dele: mover para o lado e renomear.
2. Só depois levar para o código, num branch, conferindo pelo link de prévia da Vercel.

Levantamento de 13/11/2026, feito pelo código e pelo texto renderizado, sem ver o layout. Confirme olhando o site antes de agir.

| Seção | Estado | O que fazer |
| --- | --- | --- |
| Hero | Bom | Ver se ficou vazio sem a caixa do comando; talvez uma linha de apoio sob a frase. |
| 01 What it is | Feito | Esteira de ladrilhos (a lista oficial entra misturada e sai agrupada por aula) entre dois parágrafos. Protótipo: https://claude.ai/artifact/AYjc4RuLx7rzXfCKknw8jS |
| 02 Situations | Feito | Dez situações de exemplo, numeradas de 01 a 10. |
| 03 Chunks | Feito | Escada de ladrilhos com três chunks. |
| 04 Bentos | Bom, com um card errado | Card 4: regravar o áudio com uma voz (Sarah) e refazer os tempos. |
| 05 Your course | Feito | Número em ladrilhos com seletores. Falta decidir o que os níveis 2 a 6 fazem ao clicar. |
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

> Quero continuar o redesenho do site mandarinmaxxing no Paper, no formato de ladrilhos que aprovei na seção 05. O repositório é `aveduardo-br/mandarinmaxxing-site`, o site está em https://mandarinmaxxing-site.vercel.app e o arquivo do Paper é https://app.paper.design/file/01M73ZX4CG7GXQAC76RFJZ8R94/p-2-0. Leia o `HANDOFF.md` e o `docs/ladrilhos.md`, olhe no Paper os quadros "05 Your course" e "ref", e me mostre opções antes de mudar. Converse comigo em português; o texto do site é em inglês.
