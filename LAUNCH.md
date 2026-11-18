# Checkpoint de lançamento

Revisão geral dos dois repositórios feita em 18/11/2026 (skill v0.5.6, site na main). Este arquivo é a lista do que falta para divulgar. Marque e apague conforme for resolvendo.

## Conferido e certo em 18/11/2026

- Mapas do HSK 1 a 4 passam no `check_map.py` e no `check_anchors.py` (2.000 palavras, 134 aulas, 660 blocos).
- Números do README, do FAQ e da seção 05 batem com os mapas.
- O ZIP da release é igual à pasta da skill e, desde a v0.5.6, leva o LICENSE.
- `scripts/build-topics.py` gera exatamente o `src/data/topics.ts` publicado.
- Site: sem âncora quebrada, sem rolagem lateral em 375 px, FAQ e Sources com `aria-expanded`, todos os botões com nome.
- Estudos de Boers (32 alunos, 22 horas) e Cepeda (317 experimentos) conferidos na fonte.

## Feito nesta revisão

- Skill v0.5.6: LICENSE dentro da pasta da skill (ZIP e `npx skills add`), campo `license` no `SKILL.md`, pré-requisito de execução de código no README.
- Site: mesma frase do pré-requisito no Install; áudio "up to two short clips"; Sources diz o que a skill faz de verdade na repetição; "public" no lugar de "open"; HSK 5 e 6 igual ao FAQ; ponte "lesson/part" no FAQ; título da aba; `og:url`, `canonical` e `twitter:card`; menu do celular com Sources e X; LICENSE do site corrigido; `hero-art.json` removido.

## Falta, do lado do Eduardo

- [ ] **Imagem de compartilhamento e favicon.** Salvar `public/og.png` (1200×630) e `public/favicon.svg` e descomentar as três linhas marcadas com TODO em `src/layouts/Base.astro`.
- [ ] **Áudio do card 04.** Gerar a narração de uma voz (Sarah) e refazer os tempos em `DialogueCard.astro`. Hoje o card mostra o diálogo de duas pessoas, que a skill não faz.
- [ ] **Teste real.** Instalar a v0.5.6 pelo ZIP numa conta limpa, fazer uma parte inteira e pedir "next lesson" num segundo chat. De preferência numa conta gratuita: ali o `course.md` no projeto e o conector do ElevenLabs nunca foram testados. A skill instalada na conta do Eduardo em 18/11 era anterior à 0.5.5.
- [ ] **Campo Website** na caixa About do repositório da skill.
- [ ] **Advogado** ler a licença, principalmente o trecho de contribuições.
- [ ] **Paper** atualizar com o que mudou em 18/11.

## Falta decidir

- [ ] **Contraste.** O cinza `--muted-2` (`#5c5c5c`) dá 2,9:1 sobre o fundo; o mínimo AA é 4,5:1. Aparece em legendas, rodapé e aviso de independência (11 a 15 px). `--muted` (`#8a8a8a`) passa.
- [ ] **Fonte Zpix.** A licença do autor libera uso pessoal e educacional e proíbe modificar ou recortar a fonte. O site usa um recorte com glifos adicionados. Pedir autorização (solidzoro@live.com) ou trocar. Um app do Gautech seria uso comercial.
- [ ] **Deck dos livros.** O repositório RoelTim/mandarin-hsk-standardcourse-anki, de onde vem `src/data/book.ts`, não tem licença declarada.
- [ ] **"The community writes the maps"** no rodapé, ao lado de uma licença de direitos reservados. Ficou como estava.
- [ ] **"Most people use ElevenLabs"** no README e no setup da skill. Ainda não há "most people". Ficou como estava.
- [ ] **"by Eduardo" no hero** e Gautech na licença. Recomendação: manter; a licença explica quem é Gautech.
- [ ] **HSK 5 e 6.** A skill monta o mapa inteiro na hora (1.600 palavras no HSK 5) e isso nunca foi testado. Ver "O que falta" no HANDOFF da skill.
- [ ] **Documentos internos públicos.** `HANDOFF.md`, `LAUNCH.md` e `docs/` estão num repositório público, com os IDs do projeto na Vercel.

## Não conferido

- Link do Tinkham (1997): continua no registro bibliográfico; o DOI da editora não foi confirmado.
- Página do Karpicke & Roediger (2008) no PubMed e DOI do Boers não abriram na conferência automática.
- Licença do ofou/hsk (o site e o README dizem MIT).
- Seção 02: 卖 e 累 ausentes dos livros por falha do deck; sentido de 花 no HSK 2.
