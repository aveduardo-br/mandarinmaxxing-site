# Handoff antigo (fase de build) — desatualizado, só para referência

Este arquivo é o ponto de partida para o chat que vai construir o site. Leia ele inteiro antes de começar.

- **Converse com a Eduarda em português.** Todo o texto público do site é em inglês.
- **O que já existe:** design no Paper, um protótipo funcional do hero e screenshots de cada seção em `design/screens/`.
- **Contexto de produto e conteúdo** (o que a skill faz, tom, o que não prometer): `docs/content-background.md`. Em caso de divergência com o design, vale o que está no Paper.

## Objetivo

Um site estático de uma página para apresentar a skill **mandarinmaxxing** (HSK 3.0 por tema, com chunks) e levar a pessoa a instalar.

- Hospedagem na Vercel, conectada a este repositório. Começa em `*.vercel.app`, e o domínio próprio pode vir depois.
- Repositório da skill (links de instalação e download): https://github.com/aveduardo-br/mandarinmaxxing

## Stack sugerida

- **Astro**, como site estático. Um componente por seção, CSS próprio com variáveis e JS vanilla nas ilhas interativas. Não precisa de framework de UI.
- **Fontes self-hosted** em `public/fonts`.
- **Deploy:** Vercel, com preset Astro. Cada push na `main` publica, e PRs geram preview.

## Ordem de trabalho

1. Scaffold do Astro, tokens, fontes, layout base (coluna central de 680px e side nav fixa) e deploy na Vercel. Pode ser um deploy vazio, só para ter a URL.
2. Seções estáticas com o copy atual do Paper.
3. Hero: portar `prototypes/rising-hanzi-hero.html` para um componente.
4. Interações, uma por vez: Chunks, Topics e os Bentos.
5. Responsivo. O design atual é desktop, 1440px, então precisa definir o comportamento no mobile seção por seção junto com a Eduarda.
6. Pendências de conteúdo (lista no final).

Trabalhe em incrementos pequenos e mande o link de preview para a Eduarda revisar. Ela prefere ver a coisa rodando e ajustar a partir daí.

## Fonte de verdade: Paper

- **Arquivo:** `01M73ZX4CG7GXQAC76RFJZ8R94` ("Brilliant dew"), página `p-1-0`.
- **Artboard principal:** `1-0` "Site — wireframe v1", com 1440px de largura.
- Se o chat tiver as ferramentas do Paper (via o computador da Eduarda), use `get_jsx` em cada seção para pegar estrutura, estilos e copy exatos. Se não tiver, use os screenshots em `design/screens/` e peça a ela o que faltar.

| Seção | Node | Screenshot |
| --- | --- | --- |
| Hero (com side nav) | `C-0` (nav: `50-0`) | `00-hero.jpg` |
| 01 What it is | `1P-0` | `01-what-it-is.jpg` |
| 02 Topics, not chapters | `1V-0` | `02-topics.jpg` |
| 03 Chunks | `2C-0` | `03-chunks.jpg` |
| 04 Every lesson follows the same four steps | `2M-0` (bento `9KE-0`) | `04-lesson-bento.jpg` |
| 05 Pace and audio | `3F-0` | `05-pace-audio.jpg` |
| 06 Install | `3Z-0` | `06-install.jpg` |
| 07 Questions (FAQ) | `4C-0` | `07-faq.jpg` |
| Footer | `4W-0` | (sem screenshot) |

Os numerais ao lado dos títulos de seção são SVGs em pixel, nos nodes `8IA`, `8IE`, `8IK`, `8IR`, `8IV` e `8IZ` (com sufixo `-0`). Exporte do Paper como SVG.

Artboards de apoio:
- `A1W-0` "Spaced review — hover options": a Option C mostra o estado default e o de hover (`04b-spaced-review-hover.jpg`).
- `AVD-0` "Quick review — options": a Option A foi a escolhida.
- `91Q-0`, `8J5-0`, `8YJ-0` e `9Q1-0`: explorações antigas, só como referência.

## Tokens

```
--bg:            #0E0E0E   fundo da página
--card:          #121212   fundo dos bento cards
--card-border:   #222222
--divider:       #1E1E1E   divisórias sutis (tabelas, separadores internos)
--outline:       #2A2A2A   caixas com rótulo na borda
--text:          #F2F2F2
--text-soft:     #E0E0E0
--muted:         #8A8A8A   texto secundário, descrições
--muted-2:       #5C5C5C   labels, metadados
--accent:        #D2430E   laranja principal (aulas, destaques, HSK 5)
--accent-light:  #F49A62   laranja claro (HSK 3, destaque de palavra no chat)
--accent-mid:    #E2652E
--ok:            #7FB37F   verde de "correto"
--bubble-ai:     #1C1C1C   bolha do Claude
--bubble-user:   #262626   bolha da pessoa
```

O texto das seções fica em `--muted` ou a 80% de opacidade. Os títulos ficam em `--muted` com o numeral em pixel ao lado.

## Fontes

- **Zpix** (pixel) para títulos, side nav, labels, legendas, tags e botões do hero. Peso 500. Fica nítida em múltiplos de 12px (12, 24…).
  - `assets/fonts/zpix-latin-subset.woff` tem só os caracteres latinos.
  - `assets/fonts/zpix-cjk-subset.woff` tem um recorte de hanzi. Ele foi gerado para o hero e **não cobre** todos os hanzi usados em Zpix no site, como os vizinhos do slot e as linhas da roleta de Chunks.
  - Gere um subset novo a partir do Zpix completo (https://github.com/SolidZORO/zpix-pixel-font) com os caracteres que o site usa de fato. Exemplo: `pyftsubset` com `--flavor=woff2`.
  - **Confira a licença do Zpix para uso em site antes de publicar.**
- **Kaiti SC Bold** para os hanzi em destaque. É fonte de sistema da Apple, então quem não usa Mac não tem.
  - Precisa de uma alternativa web com cara de pincel. Sugestão: LXGW WenKai, que é open source. Confira a licença e o peso, e use subset.
  - Stack: `"Kaiti SC", "STKaiti", "LXGW WenKai", serif`.
- **Geist** para o texto corrido e **Geist Mono** para labels em caixa alta (11px, `letter-spacing: 0.06em`). As duas estão no Google Fonts ou via pacote `geist`.
- Os glyphs que sobem no hero **não** são fonte. São paths SVG embutidos no protótipo.

## Componentes que se repetem

- **Bento card:** fundo `--card`, borda 1px `--card-border` e sem raio. A área visual fica em cima e o rodapé tem tag + título em Zpix 16px + descrição em Geist 13px `--muted`.
  - A tag é a numeração (01–04) ou "+", em Zpix 12px `--muted`.
  - **Não há linha divisória entre o visual e o rodapé.**
- **Bolha de chat:** raio 14px, com o canto de baixo do lado do rabinho reto.
  - O rabinho é um triângulo SVG de 8×10 grudado na base, apontando para fora.
  - A bolha do Claude fica à esquerda (`--bubble-ai`) e a da pessoa à direita (`--bubble-user`).
- **Caixa com rótulo na borda** (fieldset): contorno 1px `--outline`. A borda de cima é cortada por um rótulo em Zpix 12px `--muted-2`. A de baixo pode ser cortada por um texto, como a tradução na Useful chunk.
  - Usado em "USEFUL CHUNK" (Vocabulary) e "AUDIO · LESSON 08 · HSK 4" (Dialogue).
- **Linha do tempo de aulas** (Spaced review): colunas de barrinhas de 7px de largura com 4px entre elas.
  - Barras: cinzas com 14px de altura, revisões laranja com 20px e a aula aprendida cinza claro (`#8A8A8A`) com a mesma altura das cinzas.
  - Embaixo de cada barra vai o número da aula, só nas revisões. As outras levam um "·".
  - Fade nas pontas: opacidade `1 - (dist/centro)²`, com mínimo de 0.06.
- **Barra de vocabulário** (Topics): quadradinhos de 6px com 2px entre eles, agrupados por nível. HSK 4 em branco a 80%, HSK 3 em `--accent-light` e HSK 5 em `--accent`.

## Seção por seção

### Side nav (fixa)
- **"HOW IT WORKS":** 01 What it is · 02 Topics, not chapters · 03 Chunks · 04 A lesson, step by step · 05 Pace and audio · 06 Install.
- **"FAQ":** links para as perguntas.
- **No fim:** "Install ↓" e "GitHub ↗".
- A seção ativa é destacada durante o scroll.
- O item 04 provavelmente deve passar a acompanhar o título novo da seção. Confirme com a Eduarda.

### Hero
- **O protótipo pronto está em `prototypes/rising-hanzi-hero.html`** (canvas + SVG, `requestAnimationFrame`, glyphs em `Path2D`):
  - **Arte fixa:** o "MANDARIN" é formado por hanzi pequenos e o "maxxing" é um path.
  - **Glyphs:** trocam em stagger. O de cima de cada coluna se solta e sobe flutuando, com opacidade cheia, e depois a célula reaparece.
  - **Mouse:** empurra as partículas, e quanto mais alto elas estão, mais forte o empurrão. Os glyphs do MANDARIN seguem o cursor e voltam com mola, sem delay.
  - Constantes principais: `SPRING 650`, `SPRING_DAMP 38`, partículas `RADIUS 46` e `FORCE 2600`. A mola usa substeps.
  - **Sem efeitos de cor.** A Eduarda rejeitou gradiente, pintura e fade.
  - **Glyphs como paths SVG, não Zpix.** Ela testou com Zpix e preferiu os paths.
- **Abaixo da arte:**
  - Abas "Claude Code / Codex" que trocam o comando, com copiar.
  - Linha "a skill for Claude".
  - A frase "A topic-based way to study Mandarin with HSK 3.0 vocabulary and phrases you can use in everyday conversations."
  - Botões "Download for Claude", que é o ZIP do release mais recente, e "Copy install command".
  - Meta linha: `/mandarinmaxxing · HSK 3.0 · by Eduarda · v0.1.13 · Free · Install ↓`.
- A versão e os links devem vir do repositório da skill. Confira antes de publicar.

### 02 Topics, not chapters (interativo)
- **Topics:** lista de 10 tópicos agrupados em pares separados por espaço. Cada um tem número, nome em Zpix e 3 hanzi de prévia em cinza à direita.
- **Aula aberta:** um tópico aberto (exemplo: "--> 08 Eating out") mostra o vocabulário em Kaiti com a tradução embaixo.
  - Palavras do nível em branco, HSK 3 em `--accent-light` e HSK 5 em `--accent`, mais o "… +11 more".
  - Embaixo: a barra de quadradinhos, a legenda "■ HSK 4 · 14 ■ HSK 3 · 3 ■ HSK 5 · 3" na mesma linha e a nota "Extras from a level below or above come in when they make a useful chunk with the rest."
- **Interação:** clicar ou passar o mouse num tópico abre a aula dele (accordion).
  - Precisa de dados para cada tópico: palavras, níveis e contagem. Monte com a Eduarda a partir do vocabulário HSK 3.0.
- **Ideia aprovada para depois:** hover num quadradinho acende a palavra correspondente e vice-versa. A ordem dos quadradinhos fica agrupada por nível.

### 03 Chunks (interativo)
- **Roleta tipo slot com duas partes independentes:**
  - Esquerda: 我走路去 / 我坐出租车去 / **我坐地铁去** / 我骑自行车去 / 我开车去.
  - Direita: 医院 / 学校 / **公司** / 机场 / 超市.
- **Visual:** a linha do meio fica em Kaiti grande, com a esquerda em branco e a direita em laranja. As linhas de cima e de baixo ficam em Zpix, com opacidade cada vez menor (2 camadas para cada lado).
- **Tags em inglês nas bordas:** à esquerda "I take the subway to" e à direita "the office". Elas atualizam conforme a combinação.
- **Scroll infinito:** as duas colunas giram, de forma independente ou por scroll e hover. O comportamento exato fica para testar no site.

### 04 Every lesson follows the same four steps (bento, cada card interativo)
- **01 Quick review:**
  - Em cima, uma linha discreta no estilo das etapas de ferramenta do Claude: "↺ Mixed 2 chunks from earlier lessons with today's words ›", em cinza, sem contorno.
  - Depois as bolhas: a pergunta, a resposta 吃完饭我坐地铁回家。 (com 坐地铁 em `--accent-light`) e o feedback "✓ Natural. Nice, 坐地铁 is sticking."
  - Interação sugerida: as mensagens aparecem em sequência quando entram na tela.
- **+ Spaced review:**
  - Slot com a chunk principal em Kaiti branco 32px (坐地铁) e a tradução embaixo, em branco a 70%.
  - As vizinhas ficam dos lados (打包 ‹ … › 推荐) em Zpix 12px, com as setas em `--accent` a 40%.
  - Embaixo, a linha do tempo: aprendido na aula 4 e revisões em 5, 7, 11 e 18. A legenda é "■ LEARNED ■ REVIEW".
  - **Hover:** o slot desliza para a próxima chunk e a linha do tempo troca. Exemplo: 推荐, aprendido na 3, com revisões em 4, 6, 10 e 17. Os intervalos crescem a cada revisão.
- **02 Vocabulary and chunks:**
  - Tabela com as colunas HANZI · PINYIN · MEANING, todas da mesma largura e centralizadas, com divisórias sutis entre as linhas.
  - A linha ativa (菜单) fica com o hanzi em `--accent` e o pinyin e o meaning quase brancos. As inativas ficam a 35%, com hanzi e texto no mesmo cinza.
  - Embaixo, a caixa "USEFUL CHUNK" com 请给我菜单 (菜单 em laranja). A borda de baixo é cortada por "The menu, please.", com "menu" em laranja.
  - **Hover numa linha:** ela vira a ativa e a chunk e a tradução trocam para uma que usa essa palavra. Exemplos: 味道怎么样 para 味道, 我要打包 para 打包.
  - Não tem seta. A ligação entre palavra e chunk é só pela cor.
- **03 Written translation:**
  - Bolhas: "TRANSLATE · 3 / 8 — Can you recommend a dish?"
  - A resposta da pessoa é 你可以推荐一个菜吗？, com 个 em `--accent-mid`.
  - A correção é 你可以推荐一道菜吗？ (道 em verde) + "Dishes take 道, not 个. Next one ↓".
  - Interação sugerida: as mensagens aparecem em sequência.
- **04 Dialogue and comprehension** (card de largura total):
  - Caixa "AUDIO · LESSON 08 · HSK 4".
  - **À esquerda, o player:** uma pílula escura com o play redondo laranja, a onda com o trecho tocado em laranja e o tempo.
  - **À direita, em cima, a conversa aparecendo:** A à esquerda e mais acima, já dita, em cinza: 请问，你们有什么推荐？. B à direita e mais abaixo, sendo "escrita", com as últimas letras em gradiente sumindo: 我们的宫保鸡丁很好吃.
  - **À direita, embaixo, três perguntas:** ✓ What does she ask the waiter? / ○ What does the waiter recommend? / ○ How does he describe it?
  - **Interação:** o play toca o áudio, e o texto e a onda acompanham. **O áudio ainda não existe.** Use um placeholder até a Eduarda subir o clipe de aproximadamente 20s.

### 05 Pace and audio
- **Três ritmos lado a lado e centralizados:**
  - Light: 1–4 itens por aula, em branco.
  - Standard: 5–7 itens por aula, "default", em `--accent-light`.
  - Intensive: 8–10 itens por aula, em `--accent`.
  - Cada um tem uma carinha em cima. **As imagens das carinhas ainda não existem.** No design são placeholders tracejados. A ideia é pixel art original (calma, focada, intensa), sem usar personagens de terceiros.
- **A legenda de cada ritmo** fica na mesma cor do título, a 70%.
- **Os dois parágrafos de texto** sobre áudio e hanzi estão no Paper.

### 06 Install e 07 Questions
- O conteúdo está no Paper, mas **a Eduarda ainda não revisou o design dessas duas seções.** Builde como está e marque para revisão.
- Confira os comandos e os requisitos (Node 22.20.0+, `npx`) no README da skill.

### Footer
"Made by Eduarda. Lessons taught by Claude." · "GitHub · Releases · [license]". A licença ainda está como placeholder.

## Preferências da Eduarda (importante)

- **Simples e limpo:** poucos elementos, sem "interface" falsa em volta do conteúdo. Bolhas de chat são a exceção, porque ela gosta.
- **Laranja só para destaque.** Os elementos neutros vão em cinza.
- Ela valida vendo. Mostre preview ou screenshot a cada mudança relevante e espere o ok antes de seguir para o próximo bloco grande.
- Quando o conteúdo de algo estiver fraco ou indefinido, proponha opções no chat antes de construir.
- Nada de reproduzir personagens ou artes de terceiros. Por exemplo, as carinhas do Pace têm que ser originais.

## Pendências

- [ ] Áudio do Dialogue (clipe de aproximadamente 20s, duas vozes).
- [ ] Imagens das carinhas do Pace (light, standard, intensive).
- [ ] Revisão de design de Install e FAQ.
- [ ] Comportamento no mobile de cada seção.
- [ ] Dados completos dos 10 tópicos.
- [ ] Licenças: Zpix e a fonte Kaiti alternativa. Definir a licença do site/repo para o footer.
- [ ] Nome do item 04 na side nav.
- [ ] Domínio próprio (opcional, depois).

## Mensagem para abrir o novo chat

> Vamos construir o site do mandarinmaxxing. O repositório é `aveduardo-br/mandarinmaxxing-site`. Leia o `HANDOFF.md` e siga a ordem de trabalho. Comece pelo scaffold em Astro e pelo deploy na Vercel, depois as seções estáticas, depois o hero a partir do protótipo. Converse comigo em português, e o texto do site é em inglês.
