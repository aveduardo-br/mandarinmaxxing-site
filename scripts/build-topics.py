# Builds src/data/topics.ts: ten example situations for each of HSK 2 to 6, shown in section 02 when the
# reader switches the level (HSK 1 keeps its own data in src/data/situations.ts).
#   python3 build-topics.py <skill dir> <out.ts>
# HSK 2 to 4 come from the skill's own maps (maps/hsk-N.md): ten lessons per level, the first of the jump
# start and nine spread over the level. HSK 5 and 6 have no map (the skill builds it when the learner
# gets there), so their ten situations are examples written here with the same method, using only words
# from that level's official list (checked below). Each situation lists its words in teaching order;
# the site shows the first five with a meaning (MEANINGS) and counts the rest.
import csv, json, re, sys

skill, out = sys.argv[1:3]
strip = lambda w: re.sub(r'\d+$', '', w)
syllabus = {lv: {strip(r['word']) for r in csv.DictReader(open(f'{skill}/syllabus/hsk-{lv}.csv', encoding='utf-8'))} for lv in range(1, 7)}

PICK = {
    2: ['01', '05', '07', '08', '09', '11', '13', '16', '18', '19'],
    3: ['01', '05', '08', '11', '15', '18', '22', '25', '30', '36'],
    4: ['02', '08', '10', '18', '23', '26', '31', '39', '42', '54'],
}

EXAMPLES = {
    5: [
        ('Say what you expected', '果然 居然 毕竟 的确 似乎 说不定 反而 万一 哪怕 依然 显然 难得'),
        ('Changing jobs', '辞职 简历 待遇 聘请 培训 职场 学历 员工 老板 就业 失业 离职 实习 录取'),
        ('Money and accounts', '账户 存款 人民币 汇率 信用 押金 充值 话费 税 账号 亏 成本'),
        ('In the hospital', '急诊 挂号 门诊 诊断 手术 病房 治疗 药物 病情 恢复 救护车 抢救 过敏 流感'),
        ('Love and marriage', '恋爱 交往 分手 失恋 婚礼 新郎 新娘 恭喜 嘉宾 纪念日 离婚 老公 老婆'),
        ('New Year at home', '除夕 年夜饭 压岁钱 生肖 亲朋好友 福 好运 元旦 传统 龙 亲情 团'),
        ('Renting and renovating', '公寓 租金 中介 物业 装修 社区 居民 吵 住房 卧室 阳台 舒适'),
        ('Behind the wheel', '驾照 驾驶 汽油 行驶 超速 罚款 违反 车祸 事故 保险 车库 维修 堵'),
        ('Online orders', '包裹 配送 运费 客服 好评 退还 优惠 折扣 促销 二维码 售价 涨价'),
        ('When the weather turns', '暴雨 雾 降水 升温 地震 预报 紧急 躲 避免 损失 救 报警'),
    ],
    6: [
        ('Make your case', '与其 即便 除非 无疑 未必 就算 难免 以免 不至于 恰好 毫无 总算'),
        ('Careers and companies', '求职 录用 岗位 职位 薪水 兼职 主管 总裁 创办 倒闭 破产 职责'),
        ('Deals and money', '谈判 成交 订单 定价 收购 合并 投资 股票 贷款 利息 理财 金融'),
        ('An outbreak', '病毒 传染 感染 症状 患者 传染病 发炎 肺炎 免疫 防治 康复 疲劳'),
        ('Engaged and married', '求婚 戒指 订婚 婚姻 嫁 娶 祝福 宴会 喜事 怀孕 婴儿 媳妇'),
        ('History and heritage', '文物 古迹 遗址 考古 朝代 皇帝 瓷器 书画 遗产 传承 民俗 修复'),
        ('Farming and harvest', '庄稼 种地 播种 水稻 小麦 农田 土壤 肥沃 干旱 旱灾 丰收 农产品'),
        ('Natural disasters', '台风 打雷 闪电 洪水 火灾 灾害 灾难 受灾 灾区 救援 救灾 伤亡'),
        ('At the games', '金牌 银牌 铜牌 亚军 季军 田径 体操 跳水 战胜 淘汰 夺取 赛事'),
        ('Working online', '文档 附件 链接 粘贴 点击 浏览器 论坛 隐私 联网 流量 新媒体 下线'),
    ],
}

# meaning of each shown word, keyed by level and word (a word can mean something else at another level)
MEANINGS = {
    2: {'不好意思': 'sorry to bother you', '帮': 'help', '事情': 'matter, thing', '为什么': 'why', '因为': 'because',
        '介绍': 'introduce', '位': '(polite word for people)', '丈夫': 'husband', '姓': 'surname', '爷爷': 'grandpa',
        '点': 'order (food)', '咖啡': 'coffee', '红茶': 'black tea', '饭馆': 'restaurant', '不错': 'not bad',
        '商场': 'mall', '裤子': 'trousers', '条': '(word for trousers)', '红色': 'red', '颜色': 'color',
        '走': 'walk, go', '往': 'toward', '左': 'left', '路': 'road', '过': 'cross',
        '旅游': 'travel', '出国': 'go abroad', '机票': 'plane ticket', '机场': 'airport', '飞': 'fly',
        '书包': 'school bag', '里面': 'inside', '拿': 'take', '本子': 'notebook', '上面': 'on top',
        '运动': 'sport', '打': 'play (a ball game)', '球': 'ball', '踢': 'kick', '足球': 'football',
        '身体': 'body, health', '舒服': 'comfortable', '累': 'tired', '动': 'move', '头': 'head',
        '生日': 'birthday', '快乐': 'happy', '送': 'give (a gift)', '花': 'flower', '过年': 'New Year'},
    3: {'认为': 'think, believe', '应该': 'should', '当然': 'of course', '其实': 'actually', '比较': 'fairly',
        '好久': 'a long time', '不见': 'not see', '见面': 'meet up', '聊': 'chat', '听说': 'hear that',
        '感到': 'feel', '开心': 'happy', '心里': 'deep down', '生气': 'angry', '急': 'anxious',
        '饿': 'hungry', '菜单': 'menu', '请客': 'treat someone', '尝': 'taste', '甜': 'sweet',
        '搬': 'move', '沙发': 'sofa', '屋子': 'room', '搬家': 'move house', '房子': 'house',
        '丢': 'lose', '卡': 'card', '以为': 'thought (wrongly)', '发现': 'find out', '关机': 'switch off',
        '动物': 'animal', '养': 'keep (an animal)', '马': 'horse', '动物园': 'zoo', '大熊猫': 'giant panda',
        '高铁': 'high-speed train', '出发': 'set off', '检票': 'check tickets', '起飞': 'take off', '晚点': 'delayed',
        '数学': 'math', '难': 'hard', '成绩': 'grades', '历史': 'history', '容易': 'easy',
        '晚会': 'evening show', '表演': 'perform', '节目': 'act, program', '音乐': 'music', '耳机': 'headphones'},
    4: {'原因': 'reason', '由于': 'due to', '因此': 'therefore', '结果': 'as a result', '于是': 'so, then',
        '性格': 'personality', '活泼': 'lively', '害羞': 'shy', '脾气': 'temper', '冷静': 'calm',
        '伤心': 'sad', '失望': 'disappointed', '心': 'heart', '后悔': 'regret', '可惜': "what a pity",
        '味道': 'flavor', '辣': 'spicy', '咸': 'salty', '汤': 'soup', '盐': 'salt',
        '网购': 'shop online', '快递': 'delivery', '寄': 'send', '扫码': 'scan a QR code', '会员': 'member',
        '租': 'rent', '房东': 'landlord', '房租': 'the rent', '出租': 'let out', '客厅': 'living room',
        '交通': 'traffic', '堵车': 'traffic jam', '赶': 'hurry', '停': 'park', '车位': 'parking space',
        '口语': 'speaking', '流利': 'fluent', '普通话': 'Mandarin', '听力': 'listening', '阅读': 'reading',
        '招聘': 'recruit', '条件': 'requirements', '符合': 'meet (a requirement)', '应聘': 'apply for a job', '面试': 'interview',
        '理想': 'dream, ideal', '将来': 'future', '信心': 'confidence', '目标': 'goal', '达到': 'reach'},
    5: {'果然': 'as expected', '居然': 'unexpectedly', '毕竟': 'after all', '的确': 'indeed', '似乎': 'seemingly',
        '辞职': 'resign', '简历': 'résumé', '待遇': 'pay and benefits', '聘请': 'hire', '培训': 'training',
        '账户': 'account', '存款': 'savings', '人民币': 'yuan', '汇率': 'exchange rate', '信用': 'credit',
        '急诊': 'emergency room', '挂号': 'check in (at a hospital)', '门诊': 'outpatient clinic', '诊断': 'diagnose', '手术': 'surgery',
        '恋爱': 'be in love', '交往': 'go out with', '分手': 'break up', '失恋': 'heartbroken', '婚礼': 'wedding',
        '除夕': "New Year's Eve", '年夜饭': 'New Year dinner', '压岁钱': 'red-envelope money', '生肖': 'zodiac animal', '亲朋好友': 'friends and family',
        '公寓': 'apartment', '租金': 'rent', '中介': 'agent', '物业': 'building management', '装修': 'renovate',
        '驾照': "driver's license", '驾驶': 'drive', '汽油': 'gasoline', '行驶': 'be on the road', '超速': 'speed',
        '包裹': 'parcel', '配送': 'deliver', '运费': 'shipping fee', '客服': 'customer service', '好评': 'good review',
        '暴雨': 'rainstorm', '雾': 'fog', '降水': 'rainfall', '升温': 'get warmer', '地震': 'earthquake'},
    6: {'与其': 'rather than', '即便': 'even if', '除非': 'unless', '无疑': 'undoubtedly', '未必': 'not necessarily',
        '求职': 'look for work', '录用': 'take on (staff)', '岗位': 'post', '职位': 'position', '薪水': 'salary',
        '谈判': 'negotiate', '成交': 'close a deal', '订单': 'order', '定价': 'set a price', '收购': 'buy out',
        '病毒': 'virus', '传染': 'spread (a disease)', '感染': 'infection', '症状': 'symptom', '患者': 'patient',
        '求婚': 'propose', '戒指': 'ring', '订婚': 'get engaged', '婚姻': 'marriage', '嫁': 'marry (a man)',
        '文物': 'cultural relic', '古迹': 'historic site', '遗址': 'ruins', '考古': 'archaeology', '朝代': 'dynasty',
        '庄稼': 'crops', '种地': 'farm the land', '播种': 'sow', '水稻': 'rice (the plant)', '小麦': 'wheat',
        '台风': 'typhoon', '打雷': 'thunder', '闪电': 'lightning', '洪水': 'flood', '火灾': 'fire',
        '金牌': 'gold medal', '银牌': 'silver medal', '铜牌': 'bronze medal', '亚军': 'runner-up', '季军': 'third place',
        '文档': 'document', '附件': 'attachment', '链接': 'link', '粘贴': 'paste', '点击': 'click'},
}

def lessons(lv):
    text = open(f'{skill}/maps/hsk-{lv}.md', encoding='utf-8').read()
    found = {}
    for m in re.finditer(r'^## (\d+) \| ([\w-]+) \| (.+)\n((?:.*\n)*?)(?=^## |\Z)', text, re.M):
        num, kind, name, body = m.groups()
        words = [strip(w) for line in body.splitlines() if line.startswith('- ') for w in line[2:].split()]
        found[num] = {'name': name.strip(), 'jumpStart': kind == 'jump-start', 'words': words, 'total': None}
    return found

levels = {}
for lv in range(2, 7):
    if lv in PICK:
        all_ = lessons(lv)
        items = [all_[n] for n in PICK[lv]]
        total = len(all_)
    else:
        items = [{'name': n, 'jumpStart': i == 0, 'words': ws.split()} for i, (n, ws) in enumerate(EXAMPLES[lv])]
        total = None
        for it in items:  # examples use only that level's own words
            bad = [w for w in it['words'] if w not in syllabus[lv]]
            assert not bad, (lv, it['name'], bad)
    topics = []
    for i, it in enumerate(items):
        shown = it['words'][:5]
        missing = [w for w in shown if w not in MEANINGS[lv]]
        assert not missing, (lv, it['name'], missing)
        topics.append({
            'num': str(i + 1).zfill(2),
            'name': it['name'],
            'jumpStart': it['jumpStart'],
            'count': len(it['words']),
            'words': [{'hanzi': w, 'en': MEANINGS[lv][w]} for w in shown],
            'rest': it['words'][5:],
        })
    levels[lv] = {'mapped': lv in PICK, 'lessons': total, 'topics': topics}

ts = '''// Ten example situations for each of HSK 2 to 6, for the level switch of section 02 (HSK 1 comes from
// situations.ts). HSK 2 to 4 are lessons of the skill's maps (maps/hsk-N.md); HSK 5 and 6 have no map
// (the skill builds it when the learner gets there), so theirs are examples made with the same method
// from each level's official word list. `words` are the five shown with a meaning; `rest` are the
// situation's other words. Generated by scripts/build-topics.py; do not edit by hand.
export type LevelTopic = { num: string; name: string; jumpStart: boolean; count: number; words: { hanzi: string; en: string }[]; rest: string[] };
export const levelTopics: Record<number, { mapped: boolean; lessons: number | null; topics: LevelTopic[] }> = %s;
''' % json.dumps(levels, ensure_ascii=False, indent=1)
open(out, 'w', encoding='utf-8').write(ts)
print({lv: (len(v['topics']), v['lessons']) for lv, v in levels.items()})
