// Topics shown in section 02.
// Every word shown is in the New HSK 4 list (HSK 3.0), checked against studycli.org's HSK 4 list.
// `count` is how many of HSK 4's 1,000 words the topic covers. The ten counts add up to 1,000.
// TODO (pendência): real per-topic word lists and counts, built with Eduarda from HSK 3.0.
export type Word = { hanzi: string; en: string };
export type Topic = {
  num: string;
  name: string;
  words: Word[]; // the first three are also the preview on the right of the row
  count: number;
};

export const HSK4_TOTAL = 1000;

export const topics: Topic[] = [
  {
    num: '01',
    name: 'Travel and transport',
    count: 82,
    words: [
      { hanzi: '航班', en: 'flight' },
      { hanzi: '登机', en: 'board a plane' },
      { hanzi: '换乘', en: 'transfer' },
      { hanzi: '安检', en: 'security check' },
      { hanzi: '堵车', en: 'traffic jam' },
    ],
  },
  {
    num: '02',
    name: 'Work and careers',
    count: 115,
    words: [
      { hanzi: '工资', en: 'pay' },
      { hanzi: '加班', en: 'work overtime' },
      { hanzi: '招聘', en: 'hire' },
      { hanzi: '部门', en: 'department' },
      { hanzi: '办公', en: 'office work' },
    ],
  },
  {
    num: '03',
    name: 'Health and the body',
    count: 82,
    words: [
      { hanzi: '咳嗽', en: 'cough' },
      { hanzi: '体温', en: 'temperature' },
      { hanzi: '护士', en: 'nurse' },
      { hanzi: '肚子', en: 'stomach' },
      { hanzi: '健身房', en: 'gym' },
    ],
  },
  {
    num: '04',
    name: 'School and learning',
    count: 115,
    words: [
      { hanzi: '毕业', en: 'graduate' },
      { hanzi: '课程', en: 'course' },
      { hanzi: '奖学金', en: 'scholarship' },
      { hanzi: '本科', en: "bachelor's" },
      { hanzi: '笔试', en: 'written exam' },
    ],
  },
  {
    num: '05',
    name: 'Weather and nature',
    count: 98,
    words: [
      { hanzi: '气候', en: 'climate' },
      { hanzi: '气温', en: 'temperature' },
      { hanzi: '阳光', en: 'sunshine' },
      { hanzi: '海洋', en: 'ocean' },
      { hanzi: '树林', en: 'woods' },
    ],
  },
  {
    num: '06',
    name: 'Shopping and money',
    count: 98,
    words: [
      { hanzi: '打折', en: 'discount' },
      { hanzi: '价格', en: 'price' },
      { hanzi: '现金', en: 'cash' },
      { hanzi: '零钱', en: 'change' },
      { hanzi: '顾客', en: 'customer' },
    ],
  },
  {
    num: '07',
    name: 'Friends and family',
    count: 82,
    words: [
      { hanzi: '亲戚', en: 'relative' },
      { hanzi: '家庭', en: 'family' },
      { hanzi: '父母', en: 'parents' },
      { hanzi: '兄弟', en: 'brothers' },
      { hanzi: '友谊', en: 'friendship' },
    ],
  },
  {
    num: '08',
    name: 'Eating out',
    count: 131,
    words: [
      { hanzi: '餐厅', en: 'restaurant' },
      { hanzi: '厨师', en: 'chef' },
      { hanzi: '小吃', en: 'street food' },
      { hanzi: '味道', en: 'taste' },
      { hanzi: '汤', en: 'soup' },
    ],
  },
  {
    num: '09',
    name: 'Technology and media',
    count: 115,
    words: [
      { hanzi: '互联网', en: 'internet' },
      { hanzi: '视频', en: 'video' },
      { hanzi: '密码', en: 'password' },
      { hanzi: '扫码', en: 'scan a QR code' },
      { hanzi: '短信', en: 'text message' },
    ],
  },
  {
    num: '10',
    name: 'Culture and festivals',
    count: 82,
    words: [
      { hanzi: '京剧', en: 'Peking opera' },
      { hanzi: '红包', en: 'red envelope' },
      { hanzi: '月饼', en: 'mooncake' },
      { hanzi: '庆祝', en: 'celebrate' },
      { hanzi: '节假日', en: 'public holiday' },
    ],
  },
];

// Example of a textbook lesson, for the comparison in the intro.
// HSK Standard Course 4 (上 / 4A), Lesson 1 "简单的爱情" (Simple love). The six words come from texts
// 1, 3, 4 and 5 of that lesson (checked against the lesson's full word list).
export const bookLesson = {
  label: 'HSK Standard Course 4 · Lesson 1 · “Simple love”',
  info: {
    intro: 'Words from HSK Standard Course 4A (Beijing Language and Culture University Press), Lesson 1, “简单的爱情”.',
    rows: [
      { where: 'Text 1', words: '法律' },
      { where: 'Text 3', words: '浪漫 · 缺点' },
      { where: 'Text 4', words: '星星 · 加班' },
      { where: 'Text 5', words: '脾气' },
    ],
    note: 'The course follows the earlier HSK 2.0 levels.',
  },
  source: 'https://www.mandarinai.com/article/detail/131710607257767936',
  words: [
    { hanzi: '法律', en: 'law' },
    { hanzi: '星星', en: 'star' },
    { hanzi: '加班', en: 'overtime' },
    { hanzi: '脾气', en: 'temper' },
    { hanzi: '浪漫', en: 'romantic' },
    { hanzi: '缺点', en: 'flaw' },
  ],
};
