// Topics shown in section 02. Preview hanzi come from Paper.
// TODO (pendência): full word lists, levels and counts for every topic, built with Eduarda from HSK 3.0.
export type Level = 'base' | 'below' | 'above';
export type Word = { hanzi: string; en: string; level: Level };
export type Topic = {
  num: string;
  name: string;
  preview: string;
  words?: Word[];
  more?: number;
  counts?: { base: number; below: number; above: number };
};

// Placeholder: until each topic has its own list, every topic opens with 08 (Eating out)'s content.
// TODO (pendência): real word lists, levels and counts per topic, built with Eduarda from HSK 3.0.
const placeholder: Pick<Topic, 'words' | 'more' | 'counts'> = {
  words: [
    { hanzi: '菜单', en: 'menu', level: 'base' },
    { hanzi: '味道', en: 'taste', level: 'base' },
    { hanzi: '服务员', en: 'waiter', level: 'base' },
    { hanzi: '打包', en: 'take away', level: 'base' },
    { hanzi: '推荐', en: 'recommend', level: 'base' },
    { hanzi: '点菜', en: 'order', level: 'below' },
    { hanzi: '甜', en: 'sweet', level: 'below' },
    { hanzi: '外卖', en: 'delivery', level: 'above' },
    { hanzi: '口味', en: 'flavor', level: 'above' },
  ],
  more: 11,
  counts: { base: 14, below: 3, above: 3 },
};

export const topics: Topic[] = [
  { num: '01', name: 'Travel and transport', preview: '航班 签证 行李', ...placeholder },
  { num: '02', name: 'Work and careers', preview: '面试 工资 同事', ...placeholder },
  { num: '03', name: 'Health and the body', preview: '感冒 发烧 过敏', ...placeholder },
  { num: '04', name: 'School and learning', preview: '考试 专业 毕业', ...placeholder },
  { num: '05', name: 'Weather and nature', preview: '温度 季节 森林', ...placeholder },
  { num: '06', name: 'Shopping and money', preview: '打折 价格 付款', ...placeholder },
  { num: '07', name: 'Friends and family', preview: '亲戚 邻居 聚会', ...placeholder },
  { num: '08', name: 'Eating out', preview: '菜单 味道 打包', ...placeholder },
  { num: '09', name: 'Technology and media', preview: '网站 密码 下载', ...placeholder },
  { num: '10', name: 'Culture and festivals', preview: '春节 传统 京剧', ...placeholder },
];

// Example level for the open lesson (HSK 4 = base, extras from HSK 3 and HSK 5)
export const levelNames = { base: 'HSK 4', below: 'HSK 3', above: 'HSK 5' };
