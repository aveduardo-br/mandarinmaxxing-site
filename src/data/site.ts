// Shared site data. Version and links should be checked against the skill repo before publishing.
export const SKILL_REPO = 'https://github.com/aveduardo-br/mandarinmaxxing';
export const SKILL_RELEASES = `${SKILL_REPO}/releases`;
export const SKILL_ISSUES = `${SKILL_REPO}/issues`;
// Always the newest release: the skill repo publishes one automatically for each new version.
export const SKILL_ZIP = `${SKILL_REPO}/releases/latest/download/mandarinmaxxing-claude.zip`;
export const SKILL_VERSION = 'v0.3.0';

export const sections = [
  { id: 'what-it-is', num: '01', title: 'What it is' },
  { id: 'topics', num: '02', title: 'Situations, not chapters' },
  { id: 'chunks', num: '03', title: 'Chunks' },
  { id: 'lesson', num: '04', title: 'A lesson, step by step' },
  { id: 'course', num: '05', title: 'Your course' },
  { id: 'install', num: '06', title: 'Install' },
] as const;

export const faq = [
  { id: 'faq-why', title: 'Why I made it' },
  { id: 'faq-saved', title: 'Where your course lives' },
  { id: 'faq-levels', title: 'Which levels?' },
  { id: 'faq-not', title: 'What it doesn’t do' },
  { id: 'faq-free', title: 'Free? Official?' },
] as const;
