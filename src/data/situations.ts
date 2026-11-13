// Situations shown in section 02: the HSK 1 map of the mandarinmaxxing skill.
// Generated from the skill repository (skills/mandarinmaxxing/maps/hsk-1.md and syllabus/hsk-1.csv),
// HSK syllabus released November 2025. `no` is the word's number in the official HSK 1 list, which is
// printed in pinyin order. Each situation is one lesson; the 22 counts add up to 300.
// `words` are the five shown with a meaning; `rest` are the official numbers of the lesson's other words.
export type Word = { hanzi: string; en: string; no: number };
export type Situation = {
  num: string;
  name: string;
  jumpStart: boolean;
  count: number;
  words: Word[];
  rest: number[];
};

export const HSK1_TOTAL = 300;

export const situations: Situation[] = [
  {
    "num": "01",
    "name": "Say hello and thank you",
    "jumpStart": true,
    "count": 9,
    "words": [
      {
        "hanzi": "你好",
        "en": "hello",
        "no": 147
      },
      {
        "hanzi": "谢谢",
        "en": "thank you",
        "no": 241
      },
      {
        "hanzi": "再见",
        "en": "goodbye",
        "no": 271
      },
      {
        "hanzi": "对不起",
        "en": "sorry",
        "no": 45
      },
      {
        "hanzi": "没关系",
        "en": "no problem",
        "no": 120
      }
    ],
    "rest": [
      14,
      71,
      121,
      150
    ]
  },
  {
    "num": "02",
    "name": "Say what you want",
    "jumpStart": true,
    "count": 14,
    "words": [
      {
        "hanzi": "要",
        "en": "want",
        "no": 252
      },
      {
        "hanzi": "喝",
        "en": "drink",
        "no": 77
      },
      {
        "hanzi": "吃",
        "en": "eat",
        "no": 21
      },
      {
        "hanzi": "茶",
        "en": "tea",
        "no": 17
      },
      {
        "hanzi": "喜欢",
        "en": "like",
        "no": 225
      }
    ],
    "rest": [
      13,
      50,
      115,
      146,
      165,
      192,
      221,
      233,
      299
    ]
  },
  {
    "num": "03",
    "name": "Say who you are",
    "jumpStart": true,
    "count": 9,
    "words": [
      {
        "hanzi": "叫",
        "en": "be called",
        "no": 91
      },
      {
        "hanzi": "名字",
        "en": "name",
        "no": 128
      },
      {
        "hanzi": "什么",
        "en": "what",
        "no": 182
      },
      {
        "hanzi": "谁",
        "en": "who",
        "no": 181
      },
      {
        "hanzi": "请问",
        "en": "excuse me",
        "no": 166
      }
    ],
    "rest": [
      188,
      200,
      204,
      253
    ]
  },
  {
    "num": "04",
    "name": "Where you're from and where you are",
    "jumpStart": true,
    "count": 14,
    "words": [
      {
        "hanzi": "中国",
        "en": "China",
        "no": 289
      },
      {
        "hanzi": "哪儿",
        "en": "where",
        "no": 134
      },
      {
        "hanzi": "去",
        "en": "go",
        "no": 167
      },
      {
        "hanzi": "今天",
        "en": "today",
        "no": 94
      },
      {
        "hanzi": "中文",
        "en": "Chinese",
        "no": 290
      }
    ],
    "rest": [
      66,
      69,
      82,
      130,
      131,
      170,
      196,
      272,
      297
    ]
  },
  {
    "num": "05",
    "name": "Introduce someone",
    "jumpStart": true,
    "count": 16,
    "words": [
      {
        "hanzi": "朋友",
        "en": "friend",
        "no": 156
      },
      {
        "hanzi": "认识",
        "en": "know someone",
        "no": 171
      },
      {
        "hanzi": "高兴",
        "en": "glad",
        "no": 57
      },
      {
        "hanzi": "我们",
        "en": "we",
        "no": 222
      },
      {
        "hanzi": "他们",
        "en": "they",
        "no": 201
      }
    ],
    "rest": [
      30,
      41,
      79,
      124,
      136,
      144,
      148,
      155,
      205,
      231,
      279
    ]
  },
  {
    "num": "06",
    "name": "Say your age",
    "jumpStart": true,
    "count": 16,
    "words": [
      {
        "hanzi": "岁",
        "en": "years old",
        "no": 199
      },
      {
        "hanzi": "几",
        "en": "how many",
        "no": 85
      },
      {
        "hanzi": "今年",
        "en": "this year",
        "no": 93
      },
      {
        "hanzi": "十",
        "en": "ten",
        "no": 184
      },
      {
        "hanzi": "大",
        "en": "big, old",
        "no": 25
      }
    ],
    "rest": [
      2,
      46,
      49,
      95,
      108,
      113,
      160,
      173,
      198,
      223,
      254
    ]
  },
  {
    "num": "07",
    "name": "Who lives at home",
    "jumpStart": true,
    "count": 17,
    "words": [
      {
        "hanzi": "家",
        "en": "home, family",
        "no": 86
      },
      {
        "hanzi": "爸爸",
        "en": "dad",
        "no": 3
      },
      {
        "hanzi": "妈妈",
        "en": "mom",
        "no": 114
      },
      {
        "hanzi": "哥哥",
        "en": "older brother",
        "no": 58
      },
      {
        "hanzi": "妹妹",
        "en": "younger sister",
        "no": 123
      }
    ],
    "rest": [
      1,
      31,
      47,
      60,
      78,
      87,
      92,
      104,
      111,
      112,
      122,
      263
    ]
  },
  {
    "num": "08",
    "name": "Phone calls",
    "jumpStart": false,
    "count": 5,
    "words": [
      {
        "hanzi": "电话",
        "en": "phone",
        "no": 34
      },
      {
        "hanzi": "手机",
        "en": "mobile phone",
        "no": 189
      },
      {
        "hanzi": "打电话",
        "en": "make a call",
        "no": 24
      },
      {
        "hanzi": "给",
        "en": "to, give",
        "no": 61
      },
      {
        "hanzi": "喂",
        "en": "hello (on the phone)",
        "no": 218
      }
    ],
    "rest": []
  },
  {
    "num": "09",
    "name": "Kids, partners and pets",
    "jumpStart": false,
    "count": 14,
    "words": [
      {
        "hanzi": "孩子",
        "en": "child",
        "no": 68
      },
      {
        "hanzi": "儿子",
        "en": "son",
        "no": 48
      },
      {
        "hanzi": "女儿",
        "en": "daughter",
        "no": 153
      },
      {
        "hanzi": "狗",
        "en": "dog",
        "no": 64
      },
      {
        "hanzi": "猫",
        "en": "cat",
        "no": 119
      }
    ],
    "rest": [
      142,
      143,
      152,
      154,
      202,
      203,
      234,
      235,
      287
    ]
  },
  {
    "num": "10",
    "name": "Dates and weekdays",
    "jumpStart": false,
    "count": 11,
    "words": [
      {
        "hanzi": "月",
        "en": "month",
        "no": 269
      },
      {
        "hanzi": "号",
        "en": "day of the month",
        "no": 76
      },
      {
        "hanzi": "星期",
        "en": "week",
        "no": 243
      },
      {
        "hanzi": "年",
        "en": "year",
        "no": 149
      },
      {
        "hanzi": "明年",
        "en": "next year",
        "no": 129
      }
    ],
    "rest": [
      32,
      168,
      172,
      207,
      244,
      245
    ]
  },
  {
    "num": "11",
    "name": "Time and daily routine",
    "jumpStart": false,
    "count": 20,
    "words": [
      {
        "hanzi": "现在",
        "en": "now",
        "no": 232
      },
      {
        "hanzi": "点",
        "en": "o’clock",
        "no": 33
      },
      {
        "hanzi": "起床",
        "en": "get up",
        "no": 161
      },
      {
        "hanzi": "睡觉",
        "en": "go to sleep",
        "no": 195
      },
      {
        "hanzi": "时间",
        "en": "time",
        "no": 186
      }
    ],
    "rest": [
      5,
      7,
      55,
      56,
      178,
      185,
      194,
      215,
      217,
      229,
      236,
      246,
      273,
      275,
      291
    ]
  },
  {
    "num": "12",
    "name": "Eating and drinking",
    "jumpStart": false,
    "count": 17,
    "words": [
      {
        "hanzi": "早饭",
        "en": "breakfast",
        "no": 274
      },
      {
        "hanzi": "米饭",
        "en": "rice",
        "no": 125
      },
      {
        "hanzi": "饺子",
        "en": "dumplings",
        "no": 90
      },
      {
        "hanzi": "好吃",
        "en": "tasty",
        "no": 72
      },
      {
        "hanzi": "水果",
        "en": "fruit",
        "no": 193
      }
    ],
    "rest": [
      8,
      9,
      16,
      51,
      84,
      126,
      127,
      151,
      159,
      216,
      224,
      300
    ]
  },
  {
    "num": "13",
    "name": "Shopping and paying",
    "jumpStart": false,
    "count": 21,
    "words": [
      {
        "hanzi": "买",
        "en": "buy",
        "no": 116
      },
      {
        "hanzi": "钱",
        "en": "money",
        "no": 164
      },
      {
        "hanzi": "贵",
        "en": "expensive",
        "no": 65
      },
      {
        "hanzi": "便宜",
        "en": "cheap",
        "no": 157
      },
      {
        "hanzi": "超市",
        "en": "supermarket",
        "no": 19
      }
    ],
    "rest": [
      6,
      39,
      40,
      67,
      102,
      105,
      117,
      162,
      174,
      180,
      191,
      206,
      255,
      256,
      265,
      268
    ]
  },
  {
    "num": "14",
    "name": "Choosing clothes and things",
    "jumpStart": false,
    "count": 14,
    "words": [
      {
        "hanzi": "衣服",
        "en": "clothes",
        "no": 259
      },
      {
        "hanzi": "穿",
        "en": "wear",
        "no": 23
      },
      {
        "hanzi": "好看",
        "en": "good-looking",
        "no": 73
      },
      {
        "hanzi": "新",
        "en": "new",
        "no": 242
      },
      {
        "hanzi": "漂亮",
        "en": "pretty",
        "no": 158
      }
    ],
    "rest": [
      89,
      132,
      135,
      138,
      141,
      239,
      258,
      281,
      284
    ]
  },
  {
    "num": "15",
    "name": "Where things are",
    "jumpStart": false,
    "count": 20,
    "words": [
      {
        "hanzi": "住",
        "en": "live",
        "no": 294
      },
      {
        "hanzi": "房间",
        "en": "room",
        "no": 52
      },
      {
        "hanzi": "找",
        "en": "look for",
        "no": 278
      },
      {
        "hanzi": "桌子",
        "en": "table",
        "no": 295
      },
      {
        "hanzi": "哪里",
        "en": "where",
        "no": 133
      }
    ],
    "rest": [
      11,
      80,
      110,
      137,
      139,
      140,
      163,
      175,
      212,
      213,
      226,
      262,
      280,
      282,
      283
    ]
  },
  {
    "num": "16",
    "name": "Coming and going",
    "jumpStart": false,
    "count": 12,
    "words": [
      {
        "hanzi": "来",
        "en": "come",
        "no": 106
      },
      {
        "hanzi": "回",
        "en": "go back",
        "no": 81
      },
      {
        "hanzi": "火车",
        "en": "train",
        "no": 83
      },
      {
        "hanzi": "出租车",
        "en": "taxi",
        "no": 22
      },
      {
        "hanzi": "飞机",
        "en": "plane",
        "no": 53
      }
    ],
    "rest": [
      4,
      20,
      29,
      97,
      98,
      276,
      298
    ]
  },
  {
    "num": "17",
    "name": "Free time",
    "jumpStart": false,
    "count": 17,
    "words": [
      {
        "hanzi": "电影",
        "en": "movie",
        "no": 37
      },
      {
        "hanzi": "听",
        "en": "listen",
        "no": 209
      },
      {
        "hanzi": "唱",
        "en": "sing",
        "no": 18
      },
      {
        "hanzi": "玩",
        "en": "play",
        "no": 214
      },
      {
        "hanzi": "电视",
        "en": "TV",
        "no": 36
      }
    ],
    "rest": [
      15,
      26,
      38,
      59,
      74,
      75,
      88,
      99,
      101,
      197,
      210,
      286
    ]
  },
  {
    "num": "18",
    "name": "Talking about the weather",
    "jumpStart": false,
    "count": 9,
    "words": [
      {
        "hanzi": "天气",
        "en": "weather",
        "no": 208
      },
      {
        "hanzi": "冷",
        "en": "cold",
        "no": 109
      },
      {
        "hanzi": "热",
        "en": "hot",
        "no": 169
      },
      {
        "hanzi": "下雨",
        "en": "rain",
        "no": 230
      },
      {
        "hanzi": "雪",
        "en": "snow",
        "no": 251
      }
    ],
    "rest": [
      54,
      267,
      277,
      285
    ]
  },
  {
    "num": "19",
    "name": "Studying Chinese",
    "jumpStart": false,
    "count": 15,
    "words": [
      {
        "hanzi": "学",
        "en": "learn",
        "no": 247
      },
      {
        "hanzi": "写",
        "en": "write",
        "no": 240
      },
      {
        "hanzi": "汉字",
        "en": "Chinese characters",
        "no": 70
      },
      {
        "hanzi": "问题",
        "en": "question",
        "no": 220
      },
      {
        "hanzi": "知道",
        "en": "know",
        "no": 288
      }
    ],
    "rest": [
      10,
      42,
      43,
      44,
      190,
      219,
      249,
      257,
      270,
      296
    ]
  },
  {
    "num": "20",
    "name": "At school",
    "jumpStart": false,
    "count": 16,
    "words": [
      {
        "hanzi": "学校",
        "en": "school",
        "no": 250
      },
      {
        "hanzi": "老师",
        "en": "teacher",
        "no": 107
      },
      {
        "hanzi": "学生",
        "en": "student",
        "no": 248
      },
      {
        "hanzi": "上课",
        "en": "go to class",
        "no": 177
      },
      {
        "hanzi": "同学",
        "en": "classmate",
        "no": 211
      }
    ],
    "rest": [
      27,
      28,
      103,
      179,
      228,
      237,
      238,
      264,
      266,
      292,
      293
    ]
  },
  {
    "num": "21",
    "name": "Talking about work",
    "jumpStart": false,
    "count": 8,
    "words": [
      {
        "hanzi": "工作",
        "en": "work",
        "no": 62
      },
      {
        "hanzi": "公司",
        "en": "company",
        "no": 63
      },
      {
        "hanzi": "忙",
        "en": "busy",
        "no": 118
      },
      {
        "hanzi": "上班",
        "en": "go to work",
        "no": 176
      },
      {
        "hanzi": "电脑",
        "en": "computer",
        "no": 35
      }
    ],
    "rest": [
      145,
      187,
      227
    ]
  },
  {
    "num": "22",
    "name": "Getting sick",
    "jumpStart": false,
    "count": 6,
    "words": [
      {
        "hanzi": "生病",
        "en": "get sick",
        "no": 183
      },
      {
        "hanzi": "医院",
        "en": "hospital",
        "no": 261
      },
      {
        "hanzi": "医生",
        "en": "doctor",
        "no": 260
      },
      {
        "hanzi": "觉得",
        "en": "feel, think",
        "no": 96
      },
      {
        "hanzi": "看病",
        "en": "see a doctor",
        "no": 100
      }
    ],
    "rest": [
      12
    ]
  }
];

// Example of a textbook lesson, for the comparison in the intro.
// HSK Standard Course 2, Lesson 3 "左边那个红色的是我的". The six words were checked against the
// lesson's four texts (source below): watch in text 1, newspaper and milk in text 2, room and husband
// in text 3, cup in text 4.
export const bookLesson = {
  label: 'HSK Standard Course 2 · Lesson 3 · “The red one on the left is mine”',
  info: {
    intro: 'Words from HSK Standard Course 2 (Beijing Language and Culture University Press), Lesson 3, “左边那个红色的是我的”.',
    rows: [
      { where: 'Text 1', words: '手表' },
      { where: 'Text 2', words: '报纸 · 牛奶' },
      { where: 'Text 3', words: '房间 · 丈夫' },
      { where: 'Text 4', words: '杯子' },
    ],
    note: 'The course follows the earlier HSK 2.0 levels.',
  },
  source: 'https://www.brainscape.com/flashcards/hsk-2-chapter-3-text-9795280/packs/17341559',
  words: [
    { hanzi: '手表', en: 'watch' },
    { hanzi: '报纸', en: 'newspaper' },
    { hanzi: '牛奶', en: 'milk' },
    { hanzi: '房间', en: 'room' },
    { hanzi: '丈夫', en: 'husband' },
    { hanzi: '杯子', en: 'cup' },
  ],
};
