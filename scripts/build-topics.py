# Builds src/data/topics.ts: ten example situations for each of HSK 2 to 6, shown in section 02 when the
# reader switches the level (HSK 1 keeps its own data in src/data/situations.ts).
#   python3 build-topics.py <skill dir> <out.ts>
# HSK 2 to 4 come from the skill's own maps (maps/hsk-N.md): ten lessons per level, the first of the jump
# start and nine spread over the level. HSK 5 and 6 have no map (the skill builds it when the learner
# gets there), so their ten situations are examples written here with the same method, using only words
# from that level's official list (checked below).
# Section 02 compares each situation with the HSK Standard Course books, which follow the earlier HSK
# and teach only 54% to 72% of each of today's lists. So the examples are chosen to be comparable:
# - HSK 2 to 4: PICK takes lessons most of whose words the books also teach;
# - HSK 5 and 6: EXAMPLES use words that are in the level's list and in the books;
# - the five words shown with a meaning are the first five, in teaching order, that the books teach
#   (SHOWN overrides the choice for a lesson where that rule picks an odd five).
# The matching is the same as the site's (Topics.astro) and uses src/data/book.ts and book-fixes.json.
# The script prints the coverage per level and stops if a shown word is not in the books.
import csv, json, os, re, sys

skill, out = sys.argv[1:3]
strip = lambda w: re.sub(r'\d+$', '', w)
syllabus = {lv: {strip(r['word']) for r in csv.DictReader(open(f'{skill}/syllabus/hsk-{lv}.csv', encoding='utf-8'))} for lv in range(1, 7)}

# ---- the textbooks, and where they teach a word (mirrors find() in Topics.astro) ----
DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'data')
_b = open(os.path.join(DATA, 'book.ts'), encoding='utf-8').read()
book = json.loads(re.sub(r',\s*\]$', ']', re.search(r'bookLessons[^=]*= (\[.*?\n\]);', _b, re.S).group(1).strip()))
FIX = json.load(open(os.path.join(DATA, 'book-fixes.json'), encoding='utf-8'))
lesson_of = {}
for i, l in enumerate(book):
    for w in l['words']: lesson_of.setdefault(w, i)
entries = [w for l in book for w in l['words']]
PART = {'你好': '你', '他们': '他', '她们': '她'}
def find(h, lv):
    """Index of the textbook lesson that teaches h (-1 if none) and, if not h itself, the entry it is in."""
    if h in FIX['skip']['all'] or h in FIX['skip'].get(str(lv), []): return -1, ''
    if h in lesson_of: return lesson_of[h], ''
    if h in PART: return lesson_of[PART[h]], PART[h]
    if h in FIX['taughtAs']: return lesson_of[FIX['taughtAs'][h]], FIX['taughtAs'][h]
    if len(h) > 2 and h.endswith('儿') and h[:-1] in lesson_of: return lesson_of[h[:-1]], h[:-1]  # 面条儿 → 面条
    if len(h) > 1:
        for e in entries:
            if h in e: return lesson_of[e], e
    return -1, ''
in_book = lambda h, lv: find(h, lv)[0] >= 0

PICK = {
    2: ['01', '05', '07', '08', '09', '15', '16', '17', '18', '19'],
    3: ['01', '05', '08', '11', '17', '21', '25', '26', '30', '33'],
    4: ['02', '08', '10', '18', '26', '28', '36', '39', '42', '54'],
}
# the five shown words of a lesson, where "the first five the books teach" reads oddly
SHOWN = {
    (2, '07'): '咖啡 鱼 肉 不错 洗手间',
    (2, '17'): '爱好 跳舞 有意思 上网 画',
    (3, '33'): '办公室 同事 经理 会议 请假',
}

EXAMPLES = {
    5: [
        ('Say what you expected', '果然 居然 毕竟 的确 似乎 说不定 反而 万一 哪怕 依然 显然 难得'),
        ('Changing jobs', '辞职 简历 待遇 培训 学历 员工 老板 就业 失业 实习 录取 退休'),
        ('Money and accounts', '账户 汇率 押金 欠 税 利润 成本 资金 交易 合同 消费 黄金'),
        ('In the hospital', '急诊 挂号 诊断 手术 治疗 恢复 救护车 抢救 过敏 疾病 胃 着凉'),
        ('Love and marriage', '恋爱 交往 分手 婚礼 新郎 新娘 恭喜 嘉宾 拥抱 老公 老婆 离婚'),
        ('New Year at home', '除夕 压岁钱 生肖 传统 风俗 元旦 龙 团 迎接 故乡 姥姥 外公'),
        ('Renting and renovating', '公寓 装修 物业 社区 居民 卧室 阳台 舒适 墙 玻璃 锁 吵'),
        ('Behind the wheel', '驾驶 汽油 车库 违反 罚款 车祸 事故 保险 维修 撞 行人 绕'),
        ('Parcels and bargains', '包裹 包装 优惠 名牌 品质 预订 赠送 过期 退 产品 销售 客户'),
        ('When the weather turns', '暴雨 雾 预报 地震 紧急 报警 救 损失 避免 预防 冻 滑'),
    ],
    6: [
        ('Make your case', '与其 即便 除非 未必 难免 以免 以便 明明 干脆 至于 毫无 总算'),
        ('Careers and companies', '岗位 职位 薪水 福利 兼职 主管 上级 助理 总裁 创办 倒闭 破产'),
        ('Deals and money', '谈判 成交 投资 股票 贷款 利息 收益 亏损 资产 储蓄 合并 金融'),
        ('An outbreak', '病毒 传染 感染 症状 患者 细菌 消毒 发炎 肺 免疫 防治 疲劳'),
        ('Engaged and married', '戒指 嫁 娶 婚姻 典礼 仪式 宴会 祝福 长辈 媳妇 怀孕 婴儿'),
        ('History and heritage', '文物 考古 朝代 皇帝 大臣 将军 祖先 起源 文明 遗产 收藏 修复'),
        ('Farming and harvest', '庄稼 播种 小麦 花生 辣椒 土壤 肥沃 干旱 井 割 丰收 勤劳'),
        ('Natural disasters', '台风 雷 闪电 洪水 淹没 灾害 灾难 遭受 损坏 死亡 警告 消防'),
        ('At the games', '竞赛 田径 射击 选拔 淘汰 争夺 亚军 季军 终点 突破 荣誉 俱乐部'),
        ('Working online', '附件 粘贴 编辑 压缩 版本 目录 查询 档案 论坛 隐私 反馈 通讯'),
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

# meanings added when the shown five changed to words the books teach
MORE = {
    2: {'所以': 'so', '鱼': 'fish', '肉': 'meat', '洗手间': 'restroom', '长': 'long', '教': 'teach', '班': 'class',
        '教室': 'classroom', '考': 'take a test', '题': 'question', '爱好': 'hobby', '跳舞': 'dance',
        '有意思': 'fun, interesting', '上网': 'go online', '画': 'draw', '疼': 'hurt', '药': 'medicine', '希望': 'hope'},
    3: {'结婚': 'get married', '遇到': 'run into', '变': 'change', '为': 'for', '担心': 'worry', '渴': 'thirsty',
        '感冒': 'a cold', '发烧': 'have a fever', '注意': 'watch out', '检查': 'check-up', '腿': 'leg',
        '公园': 'park', '环境': 'surroundings', '骑': 'ride', '自行车': 'bicycle', '爬': 'climb',
        '马上': 'right away', '行李': 'luggage', '接': 'pick up (someone)', '宾馆': 'hotel', '层': 'floor',
        '卫生间': 'bathroom', '干净': 'clean', '电梯': 'elevator', '办公室': 'office', '同事': 'coworker',
        '经理': 'manager', '会议': 'meeting', '请假': 'ask for leave'},
    4: {'烦': 'annoyed', '家具': 'furniture', '窗': 'window', '健身': 'work out', '教练': 'coach', '力气': 'strength',
        '汗': 'sweat', '减': 'lose, reduce', '自然': 'nature', '森林': 'forest', '保护': 'protect', '植物': 'plant',
        '棵': '(word for trees)', '语法': 'grammar', '词语': 'words', '能力': 'ability'},
    5: {'学历': 'qualifications', '押金': 'deposit', '欠': 'owe', '税': 'tax', '治疗': 'treatment', '新郎': 'groom',
        '传统': 'tradition', '风俗': 'custom', '社区': 'community', '居民': 'resident', '车库': 'garage',
        '违反': 'break (a rule)', '罚款': 'fine', '包装': 'packaging', '优惠': 'discount', '名牌': 'famous brand',
        '品质': 'quality', '预报': 'forecast', '紧急': 'urgent'},
    6: {'难免': 'hard to avoid', '福利': 'benefits', '兼职': 'part-time job', '投资': 'invest', '股票': 'stocks',
        '贷款': 'loan', '娶': 'marry (a woman)', '典礼': 'ceremony', '皇帝': 'emperor', '大臣': 'minister',
        '花生': 'peanut', '辣椒': 'chili', '雷': 'thunder', '淹没': 'submerge', '竞赛': 'competition',
        '田径': 'track and field', '射击': 'shooting', '选拔': 'select', '淘汰': 'knock out', '编辑': 'edit',
        '压缩': 'compress', '版本': 'version'},
}
for lv, m in MORE.items(): MEANINGS[lv].update(m)

def lessons(lv):
    text = open(f'{skill}/maps/hsk-{lv}.md', encoding='utf-8').read()
    found = {}
    for m in re.finditer(r'^## (\d+) \| ([\w-]+) \| (.+)\n((?:.*\n)*?)(?=^## |\Z)', text, re.M):
        num, kind, name, body = m.groups()
        words = [strip(w) for line in body.splitlines() if line.startswith('- ') for w in line[2:].split()]
        found[num] = {'num': num, 'name': name.strip(), 'jumpStart': kind == 'jump-start', 'words': words}
    return found

levels = {}
report = []
for lv in range(2, 7):
    if lv in PICK:
        all_ = lessons(lv)
        items = [all_[n] for n in PICK[lv]]
        total = len(all_)
    else:
        items = [{'num': '', 'name': n, 'jumpStart': i == 0, 'words': ws.split()} for i, (n, ws) in enumerate(EXAMPLES[lv])]
        total = None
        for it in items:  # examples use only that level's own words, each once
            bad = [w for w in it['words'] if w not in syllabus[lv]]
            assert not bad, (lv, it['name'], 'not in the level list', bad)
            assert len(set(it['words'])) == len(it['words']), (lv, it['name'], 'repeated word')
    topics = []
    for i, it in enumerate(items):
        words = it['words']
        if (lv, it['num']) in SHOWN:
            shown = SHOWN[(lv, it['num'])].split()
            assert all(w in words for w in shown), (lv, it['name'], shown)
        else:  # the first five the books teach; words they don't teach only if there aren't five
            shown = ([w for w in words if in_book(w, lv)] + [w for w in words if not in_book(w, lv)])[:5]
        out_shown = [w for w in shown if not in_book(w, lv)]
        assert not out_shown, (lv, it['name'], 'shown but not in the books', out_shown)
        missing = [w for w in shown if w not in MEANINGS[lv]]
        assert not missing, (lv, it['name'], 'no meaning', missing)
        topics.append({
            'num': str(i + 1).zfill(2),
            'name': it['name'],
            'jumpStart': it['jumpStart'],
            'count': len(words),
            'words': [{'hanzi': w, 'en': MEANINGS[lv][w]} for w in shown],
            'rest': [w for w in words if w not in shown],
        })
    n = sum(len(it['words']) for it in items)
    hit = sum(in_book(w, lv) for it in items for w in it['words'])
    report.append(f'HSK {lv}: {hit} of {n} words in the books ({hit * 100 // n}%)')
    assert hit / n >= 0.75, report[-1]  # the ten examples of a level must be comparable with the books
    levels[lv] = {'mapped': lv in PICK, 'lessons': total, 'topics': topics}

ts = '''// Ten example situations for each of HSK 2 to 6, for the level switch of section 02 (HSK 1 comes from
// situations.ts). HSK 2 to 4 are lessons of the skill's maps (maps/hsk-N.md); HSK 5 and 6 have no map
// (the skill builds it when the learner gets there), so theirs are examples made with the same method
// from each level's official word list. `words` are the five shown with a meaning (words the HSK
// Standard Course books also teach); `rest` are the situation's other words. Generated by scripts/build-topics.py; do not edit by hand.
export type LevelTopic = { num: string; name: string; jumpStart: boolean; count: number; words: { hanzi: string; en: string }[]; rest: string[] };
export const levelTopics: Record<number, { mapped: boolean; lessons: number | null; topics: LevelTopic[] }> = %s;
''' % json.dumps(levels, ensure_ascii=False, indent=1)
open(out, 'w', encoding='utf-8').write(ts)
print('\n'.join(report))
