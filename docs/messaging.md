# Messaging do mandarinmaxxing

Norte para o texto do site e da skill. Primeira versão em 12/11/2026; reescrito em 15/11/2026 com o Eduardo, para a revisão de copy do site.

Leia junto: `docs/research.md` (pesquisa e fontes), `docs/ladrilhos.md` (identidade visual) e, no repositório da skill, o `README.md` (o que a skill faz de verdade).

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
- "Comunidade" como se já houvesse um lugar para ela. Hoje é o GitHub.

## Estado da copy por seção (15/11/2026)

Tirado do código. Confira no site antes de reescrever: o design mudou muito e o texto precisa caber no layout.

| Seção | O que diz hoje | Direção |
| --- | --- | --- |
| Hero | A frase principal, "a skill for Claude", "Free" | Ver se cabe a mensagem 3 (grátis, melhora com o uso). |
| 01 What it is | "Turns the chat into a tutor", "It isn’t a complete method" | Boa base para a mensagem 2. Conferir se explica o HSK para o leitor 2. |
| 02 Situations, not chapters | Comparação com uma lição do livro | É a mensagem 1. Revisar se a diferença fica clara em duas frases. |
| 03 Chunks | "Words are only half of it" | Conferir se o exemplo mostra o reaproveitamento. |
| 04 A lesson, step by step | Os quatro passos | Texto dos cards é descritivo. Pode ganhar o porquê de cada passo. |
| 05 Your course | "The course is yours. Pick a level and a pace and watch it take shape. Every tile is one lesson." | **Prioridade.** Copy mais forte: personalizado, cada um no seu ritmo, convite a mexer no seletor. |
| 06 Install | Quatro passos | Funcional. Só conferir os nomes dos botões. |
| FAQ | Por que fiz, onde fica salvo, níveis, o que não faz, grátis | "Why I made it" carrega a mensagem 3. Ver se parte dela sobe para o corpo do site. |
| Footer | "Made by Eduardo. Lessons taught by Claude." | Pode levar o convite para ajudar a melhorar. |

## Em aberto

- **Onde entra a mensagem 3.** Seção própria, uma linha no hero, ou reforço na instalação.
- **Formulação sobre a prova.** A skill cobre o vocabulário. Proposta nunca aprovada: "The same word list, so it still counts if you’re preparing for the exam."
- **HSK 5 e 6.** Como dizer que funcionam sem mapa revisado, sem parecer promessa.

## Como revisar a copy

1. Abrir o site no navegador e ler seção por seção, com o layout na frente.
2. Para cada seção, dizer qual das três mensagens ela serve e o que está fraco.
3. Propor três ou quatro alternativas por trecho. O Eduardo escolhe e ajusta. Não reescrever tudo de uma vez.
4. Conferir cada número contra a tabela acima e o README da skill.
5. Aplicar num branch e conferir pelo link de prévia da Vercel.

Mensagem para abrir o chat:

> Quero revisar a copy do site mandarinmaxxing, que está fraca no tom geral. O repositório é `aveduardo-br/mandarinmaxxing-site` e o site está em https://mandarinmaxxing-site.vercel.app. Leia o `docs/messaging.md` inteiro e o `README.md` do repositório `aveduardo-br/mandarinmaxxing`. Abra o site no navegador, comece pela seção 05 (Your course) e me mostre três ou quatro alternativas por trecho antes de mudar. Converse comigo em português; o texto do site é em inglês.
