# mandarinmaxxing-site

The website for [mandarinmaxxing](https://github.com/aveduardo-br/mandarinmaxxing), a skill for Claude that teaches the official HSK vocabulary by everyday situation.

**Live:** [mandarinmaxxing.vercel.app](https://mandarinmaxxing.vercel.app). Every push to `main` is published by Vercel.

## Run it

Needs Node 22 or newer.

```sh
npm install
npm run dev      # local preview
npm run build    # static site in dist/
```

## Where things are

| Path | What it is |
|---|---|
| `src/pages/index.astro` | The one page: hero, sections 01 to 06, questions, sources |
| `src/components/sections/` | One file per section |
| `src/data/site.ts` | Section titles, links, the skill version shown on the page |
| `src/data/` | The example situations, the textbook lessons and the word lists behind section 02 |
| `scripts/` | Scripts that rebuild that data from the skill repository |
| `docs/messaging.md` | What the site says and how (Portuguese) |
| `HANDOFF.md`, `LAUNCH.md` | Working notes and the launch checklist (Portuguese) |

## License

The texts, design and code here belong to the project and are not open source: see [LICENSE](LICENSE). The skill is free to study with, under the license in its own repository.
