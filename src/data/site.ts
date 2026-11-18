// Shared site data. Version and links should be checked against the skill repo before publishing.
export const SKILL_REPO = 'https://github.com/aveduardo-br/mandarinmaxxing';
export const SKILL_RELEASES = `${SKILL_REPO}/releases`;
export const SKILL_ISSUES = `${SKILL_REPO}/issues`;
export const SKILL_LICENSE = `${SKILL_REPO}/blob/main/LICENSE`;
export const SKILL_CONTRIBUTING = `${SKILL_REPO}/blob/main/CONTRIBUTING.md`;
// Always the newest release: the skill repo publishes one automatically for each new version.
export const SKILL_ZIP = `${SKILL_REPO}/releases/latest/download/mandarinmaxxing-claude.zip`;
// Eduardo's profile on X, linked from his name in the hero
export const AUTHOR_X = 'https://x.com/aveduardo_br';
export const SKILL_VERSION = 'v0.5.5';

export const sections = [
  { id: 'what-it-is', num: '01', title: 'What it is' },
  { id: 'topics', num: '02', title: 'Situations, not chapters' },
  { id: 'chunks', num: '03', title: 'Chunks' },
  { id: 'lesson', num: '04', title: 'A lesson, step by step' },
  { id: 'course', num: '05', title: 'Your course' },
  { id: 'install', num: '06', title: 'Install' },
] as const;

// the block after the questions: where the words come from and the studies behind the method
export const research = { id: 'research', title: 'Where it comes from' } as const;

// the four questions of the FAQ; the others sit inside them (sections/Faq.astro)
export const faq = [
  { id: 'faq-why', title: 'How it started' },
  { id: 'faq-levels', title: 'Levels and your course' },
  { id: 'faq-not', title: 'What it doesn’t do' },
  { id: 'faq-free', title: 'Free forever' },
] as const;
