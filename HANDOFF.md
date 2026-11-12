# Handoff: reescrever a copy do site mandarinmaxxing

Ponto de partida para o chat que vai melhorar o texto e a organização dos tópicos do site. Leia este arquivo inteiro antes de começar.

- **Converse com a Eduarda em português.** Todo o texto público do site é em inglês.
- **O site já está construído e no ar.** Esta fase é de copy e estrutura, não de design nem de animação.

## Links

- **Site no ar:** https://mandarinmaxxing-site.vercel.app
- **Repositório do site:** `aveduardo-br/mandarinmaxxing-site` (Astro 5). Cada push na `main` publica sozinho na Vercel, em cerca de 1 minuto.
  - Projeto na Vercel: `prj_tWI1Nl7UFscpAWkMAg2U6Y8lPDzt`, time `team_iF6SzN2M0FmIrVc7h5KJK22G`.
- **Repositório da skill:** https://github.com/aveduardo-br/mandarinmaxxing. É a fonte da verdade sobre o que o produto faz. Leia o `SKILL.md` e o README de lá antes de propor texto.
- **Contexto de produto e conteúdo:** `docs/content-background.md`. Cobre o que a skill faz, a primeira conversa, como é uma aula, o tom e o que não prometer.
- **Design original:** Paper, arquivo `01M73ZX4CG7GXQAC76RFJZ8R94`. O site já evoluiu além dele, então para o texto vale o que está no código.

## Objetivo desta fase

A Eduarda acha a copy atual "decente, mas pode melhorar muito". O texto não reflete bem o produto, e os tópicos podem ser mais bem organizados.

Processo combinado:
1. **Diagnóstico.** Ler todo o texto atual (lista de arquivos abaixo) e listar o que cada seção tenta dizer, o que se repete, o que falta e o que está fora de ordem.
2. **Fundamentos.** Fazer poucas perguntas à Eduarda: para quem é o site, a promessa principal em uma frase, o tom e um ou dois sites cuja escrita ela admira.
3. **Nova estrutura.** Propor a ordem e o papel de cada seção antes de escrever frases. Mudar, juntar ou cortar seções é permitido.
4. **Reescrita num documento** (Claude Docs), seção por seção, para ela comentar. Não mexer no site ainda.
5. **Aplicar no site** depois da aprovação. Conferir no navegador como o texto fica no layout.

Use a skill `design:ux-copy` para revisar títulos, botões e frases curtas.

## Onde o texto mora no código

Ordem da página (`src/pages/index.astro`): Hero, 01 What it is, 02 Topics, not chapters, 03 Chunks, 04 Every lesson follows the same four steps, 05 Pace and audio, 06 Install, 07 FAQ, Footer.

| Parte | Arquivo |
| --- | --- |
| Títulos das seções, side nav, FAQ, versão e links da skill | `src/data/site.ts` |
| Hero (frase, botões, meta linha) | `src/components/Hero.astro` |
| 01 What it is | `src/components/sections/WhatItIs.astro` |
| 02 Topics (intro, comparação com o livro, lista) | `src/components/sections/Topics.astro`, dados em `src/data/topics.ts` |
| 03 Chunks | `src/components/sections/Chunks.astro` |
| 04 Lesson (bento com 5 cards) | `src/components/sections/Lesson.astro`, mais `QuickReview`, `SpacedReview`, `TranslationChat` e `DialogueCard` |
| 05 Pace and audio | `src/components/sections/Pace.astro` |
| 06 Install | `src/components/sections/Install.astro` |
| 07 FAQ | `src/components/sections/Faq.astro` + `faq` em `site.ts` |
| Footer | `src/components/Footer.astro` |

Os títulos da side nav vêm de `sections` em `site.ts`. Se um título mudar, mude ali também.

## Regras de conteúdo

- **Fatos sobre HSK verificados.** As palavras dos tópicos foram checadas contra a lista do New HSK 4 (HSK 3.0). A lição do livro (HSK Standard Course 4A, Lesson 1 "简单的爱情") foi checada e tem fonte. Não invente números nem palavras.
- **Comparação com livros HSK com neutralidade.** É uma organização diferente, não "melhor".
- **Não prometer** fluência, resultado em prova nem nada que a skill não faz (veja `docs/content-background.md`).
- O curso pessoal da Eduarda (67 aulas, HSK 1–2) é a origem do projeto, não um número do produto.

## Preferências da Eduarda

- **Simples e limpo.** Frases curtas e diretas, sem jargão de marketing.
- Ela quer ver opções antes de mudanças grandes, e valida vendo.
- **Não mexer em design nem em animação nesta fase**, a não ser que ela peça. Ela rejeita coisas que ficam "travadas" ou coloridas demais.
- **Fontes:** Geist Light no texto corrido, Geist 600 nos títulos (`.display`) e Ma Shan Zheng em todos os hanzi. Ela quer a mesma fonte de hanzi em todo o site.

## Estado atual (12/11/2026)

- **Último commit:** a troca do useful chunk no card de vocabulário voltou para o efeito de glitch. O teste com escrita por traços foi desfeito.
- **Pace and audio:** os nomes 轻松 / 标准 / 强化 são escritos com animação de traços (biblioteca `hanzi-writer`), e as carinhas placeholder foram removidas.
  - **Em aberto:** a Eduarda disse que quer a mesma fonte em tudo. Os traços animados não usam a Ma Shan Zheng. Pergunte se ela quer tirar a animação do Pace também.

## Pendências fora da copy (não são desta fase)

- Responsivo / mobile.
- Licença no footer.
- Revisão de design de Install e FAQ.
- Listas reais de palavras por tópico e posições na barra do HSK 4.
- Domínio próprio.

## Mensagem para abrir o novo chat

> Quero reescrever a copy do site mandarinmaxxing e organizar melhor os tópicos. O repositório é `aveduardo-br/mandarinmaxxing-site` e o site está em https://mandarinmaxxing-site.vercel.app. Leia o `HANDOFF.md` e siga o processo de lá: diagnóstico, perguntas, estrutura, reescrita num documento e só depois aplicar no site. Converse comigo em português; o texto do site é em inglês.
