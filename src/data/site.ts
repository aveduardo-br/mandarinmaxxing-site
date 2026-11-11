// Shared site data. Version and links should be checked against the skill repo before publishing.
export const SKILL_REPO = 'https://github.com/aveduardo-br/mandarinmaxxing';
export const SKILL_RELEASES = `${SKILL_REPO}/releases`;
export const SKILL_ZIP = `${SKILL_REPO}/releases/latest/download/mandarinmaxxing-claude.zip`;
export const SKILL_VERSION = 'v0.2.0';

export const sections = [
  { id: 'what-it-is', num: '01', title: 'What it is' },
  { id: 'topics', num: '02', title: 'Topics, not chapters' },
  { id: 'chunks', num: '03', title: 'Chunks' },
  // Nav label pending: may follow the new section title.
  { id: 'lesson', num: '04', title: 'A lesson, step by step' },
  { id: 'pace', num: '05', title: 'Pace and audio' },
  { id: 'install', num: '06', title: 'Install' },
] as const;

export const faq = [
  { id: 'faq-why', title: 'Why I made it' },
  { id: 'faq-where', title: 'Where does it work?' },
  { id: 'faq-new-chat', title: 'Picking up in a new chat' },
  { id: 'faq-pronunciation', title: 'Pronunciation' },
  { id: 'faq-free', title: 'Free? Official?' },
] as const;
