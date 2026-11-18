// 中文 ("Chinese") for the footer, drawn in tiles: one tile per pixel of the two characters as the Zpix
// pixel font draws them at 12px (the 11 × 11 bitmaps of 中 and 文 in the font's source, src/zpix.sfd).
// '#' is a tile, '.' is empty. GAP empty columns separate the two characters.
export const ZHONG = [
  '.....#.....',
  '.....#.....',
  '###########',
  '#....#....#',
  '#....#....#',
  '#....#....#',
  '#....#....#',
  '###########',
  '.....#.....',
  '.....#.....',
  '.....#.....',
];
export const WEN = [
  '.....#.....',
  '.....#.....',
  '###########',
  '..#.....#..',
  '..#.....#..',
  '...#...#...',
  '....#.#....',
  '.....#.....',
  '....#.#....',
  '..##...##..',
  '##.......##',
];
export const GAP = 2;
// hanzi the tiles show: words from the HSK 1 situations and a few about learning the language
export const ZW_CHARS = '你好谢再见我要喝茶吃饭朋友认识高兴家爸妈电话手机买钱贵便宜来回火车天气冷热生病医院学汉语说写读听字';
// MAXXING's letters turn into this, one hanzi each: 学中文很有意思, "learning Chinese is fun"
export const MX_HAN = '学中文很有意思';
