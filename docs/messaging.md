# Messaging do mandarinmaxxing

Norte para o texto do site e da skill. Primeira versão em 12/11/2026; reescrito em 15/11/2026 com o Eduardo, para a revisão de copy do site.

Leia junto: `docs/research.md` (pesquisa e fontes), `docs/ladrilhos.md` (identidade visual) e, no repositório da skill, o `README.md` e a seção "Como a skill funciona hoje" do `HANDOFF.md` (o que a skill faz de verdade).

## Objetivo

Ajudar quem quer conversar no dia a dia a estudar o vocabulário do HSK numa ordem que faça sentido para conversar, sem sair do HSK.

## Frase principal

> The same HSK words, reorganized around everyday conversations.

Fechada. Não mexer sem o Eduardo pedir.

## Para quem

Dois leitores, nesta ordem de importância.

**1. Quem já estudou pelo HSK.** É o leitor principal. Conhece os livros, sabe o que é o HSK e sentiu que as palavras de uma lição não conversavam entre si. O que ele precisa ouvir: é a mesma lista que ele já conhece, em outra ordem, e por que essa ordem ajuda a conversar. A ideia central do site é **explicar a diferença entre estudar pelo livro do HSK e estudar por aqui**.

**2. Quem está começando agora.** Não conhece o HSK e talvez nunca tenha estudado mandarim. Gosta de IA e quer algo feito para ele. O que ele precisa ouvir: é um tutor no chat, o curso se adapta ao ritmo dele, e dá para começar hoje, de graça.

O texto não pode exigir que o leitor 2 já saiba o que é o HSK, nem tratar o leitor 1 como iniciante. Uma frase curta explicando o HSK resolve os dois.

## As três mensagens

É aqui que a copy atual está fraca, segundo o Eduardo (15/11): o tom geral explica pouco. Cada seção deve servir a pelo menos uma destas três.

### 1. A diferença para o livro

- O livro ensina a lista capítulo por capítulo, em torno da gramática de cada capítulo. Por isso uma lição pode juntar "quarto" e "relógio".
- Aqui a mesma lista é agrupada pelo momento em que você usaria as palavras: se apresentar, pedir comida, fazer compras.
- Não é "melhor". É outra organização, com outro objetivo. O livro prepara para a prova; aqui o foco é conseguir falar sobre uma coisa de cada vez.
- A seção 02 ("Situations, not chapters") carrega essa mensagem. As outras devem reforçá-la, não repeti-la.

### 2. O curso é seu

- É um tutor: explica, pergunta, corrige, lembra onde você parou.
- Cada pessoa vai no ritmo dela. Você escolhe o nível e quantas palavras novas por aula, e o curso se refaz em volta disso.
- Você pode mudar tudo depois: ritmo, ordem das situações, áudio, idioma das explicações.
- A seção 05 ("Your course") é a prova disso: é um seletor interativo, a pessoa escolhe o nível do HSK e as palavras por aula e vê o tamanho do curso mudar. **O Eduardo quer uma copy mais forte aqui.** O texto deve dizer "isto é feito para você" e convidar a mexer, não descrever a interface.

### 3. Grátis, feito em comunidade, sempre melhorando

- É uma ferramenta gratuita que o Eduardo fez para ele mesmo e quer deixar para as pessoas.
- Melhora com o uso: quem estuda aponta uma aula estranha ou uma palavra na situação errada, e o mapa é corrigido.
- Hoje isso aparece só no FAQ ("Why I made it") e no rodapé. Merece mais espaço: no hero, perto da instalação ou numa seção própria.
- Cuidado para não prometer uma comunidade que ainda não existe (não há fórum nem Discord). O que existe é o GitHub, com as issues abertas.

## Pilares

1. **Situações, não capítulos.** Cada situação reúne o que você precisa para conversar sobre ela. Usar "situação", nunca "categoria" nem "tópico".
2. **Ainda é o HSK.** Mesma lista oficial, reorganizada. Nenhum método está errado.
3. **Chunks para conversar.** Frases curtas que você reaproveita em outra situação, trocando uma palavra.
4. **As palavras voltam.** As antigas reaparecem dentro das aulas seguintes.
5. **Seu ritmo, seu idioma.** Você escolhe quantas palavras por aula e em que língua quer as explicações.

## Vocabulário do site

O site e a skill usam palavras diferentes para a mesma coisa. No site, use sempre a coluna da esquerda.

| No site | Na skill (README, SKILL.md) | O que é |
| --- | --- | --- |
| situation | lesson | Um tema: "Shopping and paying" |
| lesson | part | Uma sessão de estudo, com poucas palavras novas |
| words / lesson | pace | Quantas palavras novas por sessão |
| jump start | jump start | As primeiras situações de um nível, com as palavras que todas as outras usam |

Nunca escrever "sitting", "part", "topic" ou "category" no site.

## O que a skill faz hoje (v0.4.0)

Só afirme no site o que está nesta lista ou no README da skill.

- **Níveis prontos:** HSK 1 a 4, com 2.000 palavras em 134 situações mapeadas à mão.

| Nível | Palavras | Situações | Aulas no ritmo 3 / 5 / 7 |
| --- | --- | --- | --- |
| HSK 1 | 300 | 22 | 97 / 58 / 42 |
| HSK 2 | 200 | 19 | 66 / 38 / 29 |
| HSK 3 | 500 | 37 | 168 / 94 / 69 |
| HSK 4 | 1.000 | 56 | 319 / 173 / 130 |

- **HSK 5 e 6:** as listas oficiais estão incluídas. O mapa ainda não foi escrito, e a skill monta um quando a pessoa começa o nível.
- **Lista usada:** o syllabus do HSK publicado em novembro de 2025.
- **Cada nível abre com um jump start.** Ao terminar um nível, o curso segue para o próximo e as palavras antigas continuam voltando.
- **Uma aula tem quatro passos:** revisão, palavras novas, tradução de uma frase por vez com correção, e um texto curto para ler ou ouvir.
- **Ritmo:** 3, 5 ou 7 palavras novas por aula, ou qualquer outro número.
- **Áudio:** opcional, um clipe curto por aula, com um provedor de voz como o ElevenLabs.
- **Idioma:** a skill explica e corrige na língua em que a pessoa escreve.
- **Onde fica salvo:** no projeto do Claude. Abre um chat novo, em qualquer aparelho, e diz "next lesson".
- **Preço:** grátis. Precisa de uma conta do Claude.

O que ela não faz: não avalia pronúncia nem tons, não substitui flashcards para a memória de longo prazo, não cobre gramática, escrita à mão nem fala, que a prova também cobra.

Frase que já está no site e define bem o limite: "It isn’t a complete method. It’s a guide to what to study next."

## A história (primeira pessoa, só no FAQ e onde o Eduardo aparecer)

- O Eduardo achou o método do livro lento e as palavras soltas.
- Exemplo verificado: **quarto (房间) e relógio (手表) na mesma lição**, HSK Standard Course 2, Lição 3. O que une a lição é a gramática.
- Ele queria aprender tudo em volta de um momento e conseguir conversar sobre o assunto.
- Escreveu o próprio curso em português: 67 aulas, HSK 1 e 2. Sentiu mais progresso. É experiência pessoal, não promessa.
- Um amigo que também estudava testou e preferiu. Aí virou uma skill para qualquer pessoa.

No resto do site, usar "you" e voz neutra.

## Tom

Pessoal, simples, frases curtas, sem jargão de marketing. A referência do Eduardo é https://skills.wheresryan.sh/anatomy. O que levar de lá:

- **Cada seção abre com a regra dita de forma seca**, e só depois vem o exemplo.
- **Frases curtas abrem ou fecham o parágrafo.** As longas ficam no meio, explicando.
- **Títulos curtos, às vezes com um contraste.** O nosso "Situations, not chapters" já segue isso.
- **Números exatos no lugar de adjetivos.** "2,000 words in 134 situations", não "a lot of content".
- **Exemplo concreto sempre.** Uma palavra, uma frase, uma lição de livro com fonte.
- **Limites ditos sem pedir desculpa**, numa seção própria.
- **Primeira pessoa para contar o processo, imperativo para falar com o leitor.**

O que o Eduardo aprovou e rejeitou neste projeto:

| Aprovado | Rejeitado |
| --- | --- |
| "The words are the same as the official HSK. What changes is the order." | "in the order life asks for" (soa slogan) |
| "The course is yours." | Parágrafo explicando a interface |
| "No method is wrong." | "Better than the textbook" |
| "That’s my experience, not a promise." | Qualquer promessa de resultado |
| Uma frase que explica | Uma frase que só soa bem |

Regra prática: se a frase pode ir para o site de qualquer outro produto, ela está genérica. Troque por uma que só o mandarinmaxxing poderia dizer.

## O que não dizer

- "Melhor método", "mais eficaz que o livro".
- Fluência, aprovação na prova, "mesmo nível de quem fez o livro".
- Avaliação de pronúncia.
- Qualquer função que a skill não tenha.
- "Comunidade" como se já houvesse um lugar para ela. Hoje é o GitHub, com as issues.
- Clichês de comunidade ("from the community, for the community").

## Estado da copy por seção (16/11/2026, segunda rodada)

Segunda rodada de copy, aprovada pelo Eduardo em 16/11/2026. Direção nova: falar da comunidade sempre que der, sem dizer que o Eduardo fez tudo, e sem clichê ("from the community, for the community" foi rejeitado). O que a comunidade faz de verdade: aponta lições estranhas e palavras na situação errada, e os mapas são corrigidos.

| Seção | Como está |
| --- | --- |
| Hero | Sem "free". Linha: "A tutor in your Claude chat for the official word list of the Chinese proficiency test. Built in the open and shaped by the people who study with it." Linha pequena sem "Free". É o único lugar que explica o que é o HSK. |
| 01 What it is | Segue o HSK nível a nível; mesmas palavras, outra ordem, por situação. Segundo parágrafo: como a aula funciona, "It's a method: use it however works for you", e melhora com quem estuda. Saiu "It isn't a complete method". |
| 02 Situations, not chapters | Abertura nomeia o livro: "If you study with the HSK Standard Course, the textbook series made for the test…". Resto igual. |
| 03 Chunks | A primeira frase do parágrafo de baixo muda com o chunk (太贵了/太热了, 我想看一下/我想问一下, 你什么时候来/你什么时候下班), com uma animação curta. |
| 04 A lesson | Quick review sem "translate". Spaced review: "Old words keep coming back." Card 02 e 03 reescritos (o 03 fala do jeito natural de dizer). Pendente: o card de áudio mostra diálogo A/B e a skill gera uma voz só. |
| 05, 06 | Sem mudança nesta rodada. |
| FAQ | "Why did you make this?" reescrito com a história do Eduardo (ferramenta para estudar, progresso travado, amigo, HSK 1 e 2) e fecha com "Anyone who studies with it can make it better for the next person". Saiu o exemplo do quarto e do relógio (a 02 já mostra). |
| Footer | Frase igual. Coluna "How it works" com todas as seções menos Install. Coluna "Join in": "The maps grow with the people who use them. Suggest a situation, improve a lesson, or point out a mistake." + "Contribute on GitHub ↗" (convite a colaborar, não só reportar erro). Linha "The community writes the maps. Claude teaches the lessons." Aviso com créditos do ofou/hsk (MIT). |

## Em aberto

- **Onde entra a mensagem 3.** Seção própria, uma linha no hero, ou reforço na instalação.
- **Formulação sobre a prova.** A skill cobre o vocabulário. Proposta nunca aprovada: "The same word list, so it still counts if you’re preparing for the exam."
- **HSK 5 e 6.** Como dizer que funcionam sem mapa revisado, sem parecer promessa.

## Como revisar a copy

1. Abrir o site no navegador e ler seção por seção, com o layout na frente. Incluir os textos pequenos: cards dos bentos, rótulos dos gráficos, seletores, etiquetas, botões e o que aparece ao passar o mouse.
2. Para cada seção, dizer qual das três mensagens ela serve e o que está fraco.
3. Propor três ou quatro alternativas por trecho. O Eduardo escolhe e ajusta. Não reescrever tudo de uma vez.
4. Conferir cada número contra a tabela acima e o README da skill.
5. Aplicar num branch e conferir pelo link de prévia da Vercel.

Mensagem para abrir o chat:

> Quero revisar toda a copy do site mandarinmaxxing e ver se está forte o suficiente: os textos das seções e também os textos dentro dos bentos, dos gráficos e dos seletores. O repositório é `aveduardo-br/mandarinmaxxing-site` e o site está em https://mandarinmaxxing-site.vercel.app. Leia o `docs/messaging.md` inteiro. Para saber o que a skill faz, leia no repositório `aveduardo-br/mandarinmaxxing` o `README.md` e a seção "Como a skill funciona hoje" do `HANDOFF.md`. Abra o site no navegador, me diga seção por seção o que está fraco, comece pela seção 05 (Your course) e me mostre três ou quatro alternativas por trecho antes de mudar. Converse comigo em português; o texto do site é em inglês.
