# Ladrilhos: a identidade visual das seções

Definido com o Eduardo em 14/11/2026, a partir da seção "05 Your course". Ele quer redesenhar as outras seções no Paper neste mesmo formato. Este documento guarda as medidas, a paleta e, principalmente, o raciocínio.

Arquivo no Paper: `01M73ZX4CG7GXQAC76RFJZ8R94`, página "Site — atual (v0.3.0)".

## A ideia em uma frase

Os ladrilhos não enfeitam o texto: eles **formam** a coisa de que a seção fala.

Na seção 05, a coisa é o número de aulas do curso. Então os ladrilhos formam o número 58, e ele vira 97 ou 42 quando o ritmo muda.

## Como pensar uma seção nova

1. **Ache o que a seção afirma.** Um número, uma forma, uma comparação. Na 05 era "o curso tem este tamanho".
2. **Faça os ladrilhos formarem isso.** Um número, uma letra, um hanzi grande, um perfil de montanha, uma escada, um calendário. Se os ladrilhos puderem sair sem a seção perder o sentido, eles estão só enfeitando.
3. **Dê significado a cada ladrilho.** Um ladrilho é uma unidade de verdade: uma aula, uma palavra, uma situação. A cor diz a que grupo ele pertence.
4. **Deixe a pessoa mexer.** Os controles também são ladrilhos. Ao mexer, a forma se refaz.
5. **Ponha um texto vivo ao lado.** Poucas linhas que mudam junto com a forma e dizem o que aquela combinação significa.
6. **Prenda etiquetas pretas nas pontas.** Elas dão começo e fim, como numa linha do tempo.

O Eduardo liberou licença poética: é uma vitrine. A contagem de ladrilhos não precisa bater com o dado (o 97 usa 46 ladrilhos e o 42 usa 44). Os textos e números escritos continuam tendo que ser verdadeiros.

O que ele rejeitou na versão anterior (o caminho serpenteando entre os textos): "falta criatividade". Os ladrilhos estavam ali só como divisória.

## Referências

Estão no quadro `ref` da mesma página do Paper. O que vale levar de cada uma:

- **O número 26 e os glifos grandes:** ladrilhos formando um caractere enorme, com o texto pequeno ao redor.
- **A montanha do Hiroshige:** ladrilhos coloridos desenhando o contorno de um gráfico, com quadrados vazios preenchendo embaixo e etiquetas nos picos.
- **A escada com três etiquetas:** um caminho curto com uma etiqueta preta em cada ponta.
- **O quadrado cheio:** uma grade inteira de ladrilhos, para quando a ideia é "tudo isto".

## Medidas

**Ladrilho**

- 28 × 28 px, sem borda, sem raio, sem espaço entre ladrilhos.
- Hanzi: fonte Zpix, 24 px, altura de linha 24 px, peso 500, cor `#161616`.
- Posição do hanzi dentro do ladrilho: 3 px da esquerda, 1 px do topo.

**Cores dos ladrilhos**

| Uso | Cor |
| --- | --- |
| Jump start e item selecionado | `#D2430E` (o accent do site) |
| Situações, em ciclo | `#7FA3B0`, `#9A9C5C`, `#C29A5B`, `#A0938B`, `#E8835A` |
| Ladrilho apagado (opção não escolhida) | fundo `#1E1E1E`, hanzi `#8A8A8A` |

O laranja forte é um só. As outras cinco são apagadas de propósito, para o laranja continuar sendo o destaque.

**Etiqueta preta**

- Fundo `#000000`, padding 3 px 8 px, encostada no ladrilho.
- Texto: Geist 11 px, altura 14 px, peso 600, caixa alta, espaçamento 0,06 em, cor `--color-text`.
- Exemplo: `TODAY · SAY HELLO`, `JAN 10 · GETTING SICK`.

**Número feito de ladrilhos**

- Cada dígito ocupa uma grade de 7 colunas × 11 linhas (196 × 308 px), com uma coluna vazia entre os dígitos.
- Traço de um ladrilho de espessura. Cantos externos sem ladrilho, o que arredonda a forma.
- Os ladrilhos seguem a ordem de leitura: de cima para baixo, da esquerda para a direita, primeiro dígito e depois o segundo. O laranja do jump start fica no começo.

**Seletor de ladrilhos**

- Rótulo em caixa alta (mesmo estilo da etiqueta, cor `--color-text-dim`, sem fundo).
- Uma fileira de ladrilhos colados; o escolhido em laranja, os outros apagados.
- Uma legenda de duas ou três linhas embaixo: Geist 14 px, altura 22 px, peso 300.
- Os hanzi dos seletores são palavras do próprio HSK 1: 一 二 三 四 五 六 para nível, 三 五 七 para ritmo, 听 (ouvir) e 读 (ler) para áudio.

**Texto vivo ao lado da forma**

- Uma palavra em destaque (Geist 28 px, peso 600) que nomeia o número: "lessons".
- Um ou dois parágrafos de 15 px, altura 24 px, peso 300, com o que muda em peso 500 e cor cheia.
- Uma legenda de cores pequena (13 px) explicando o laranja e as demais.

O resto segue os tokens do arquivo: fundo `--color-bg`, coluna de 680 px, título da seção com o numeral em hanzi.

## Seção 05, como ficou

Quadros no Paper: "05 Your course" na coluna principal (estado do ritmo 5) e os três estados lado a lado, "pace 3 · 97 lessons", "pace 5 · 58 lessons" e "pace 7 · 42 lessons". As versões antigas estão em "05 Your course — versões anteriores".

| Ritmo | Número | Texto vivo | Etiqueta final |
| --- | --- | --- | --- |
| 三 (3 palavras) | 97 | cerca de três meses | data de hoje + 96 dias |
| 五 (5 palavras) | 58 | cerca de dois meses | data de hoje + 57 dias |
| 七 (7 palavras) | 42 | cerca de seis semanas | data de hoje + 41 dias |

Os números 97, 58 e 42 são reais: é a quantidade de partes do mapa do HSK 1 em cada ritmo. No site o número leva a palavra "lessons", por decisão do Eduardo, com a conta "uma por dia".

Comportamento combinado:

- Clicar em 三, 五 ou 七 faz os ladrilhos se soltarem e formarem o novo número. O texto ao lado e a data mudam junto.
- A data de término é calculada no dia em que a pessoa abre a página.
- 听 e 读 trocam só a última frase do texto vivo ("to listen to" ou "to read"). Não mexem nos ladrilhos.
- Nível: só 一 está ativo. Os níveis 2 a 6 não têm mapa e ficam apagados. Falta decidir o que acontece ao clicar neles.

Em aberto:

- A seção 02 do site ainda fala em "22 lessons" para o HSK 1. Com "58 lessons" aqui, trocar lá para "22 situations".
- "Your language" saiu do quadro. Pode virar uma linha no fim ou ir para o FAQ.
- No estado do 42, a etiqueta final ficou embaixo do número por falta de espaço ao lado. Na versão animada ela pode ir sempre embaixo.

## Ao levar para o código

- Fazer num branch e conferir pelo link de prévia da Vercel antes de ir para o `main`.
- Usar o GSAP, que o site já carrega, para a troca de número.
- **A fonte Zpix precisa de um recorte novo.** O `public/fonts/zpix-site.woff` só tem os hanzi da seção Chunks. O `assets/fonts/zpix-cjk-subset.woff` é maior, mas ainda faltam 26 hanzi do HSK 1, entre eles 一, 二 e 年. É preciso gerar um recorte com todos os hanzi usados, a partir do `zpix.ttf` completo (`scripts/subset-zpix.py`).
- Os hanzi e as cores de cada ladrilho podem sair de `src/data/situations.ts`.

## Dicas para trabalhar no Paper

- Escrever os ladrilhos em blocos de 12 a 16 por chamada. O HTML de cada um é longo.
- Um `div` vazio e sem fundo não é criado. Para ter um contêiner, escreva-o já com filhos.
- Ao clonar um ladrilho com `x-paper-clone` e mudar `left` e `top`, o clone perde o `position: absolute`. Depois de clonar, aplique `position: absolute` e a posição com `update_styles`.
- Para desenhar um estado novo de um quadro, duplique o quadro inteiro e troque só o que muda.
- Não apagar quadros do Eduardo. Mover para o lado e renomear.
