# Builds src/data/book.ts for the site: the words of HSK Standard Course 1 and 2, lesson by lesson,
# and the hanzi of every word number of the official HSK 1 list. Usage:
#   python3 build_book.py <deck data.json> <skill dir> <out.ts>
import json, re, csv, sys
deck, skill, out = sys.argv[1:4]
d = json.load(open(deck, encoding='utf-8'))
NAMES = {'王方', '谢朋', '大卫', '花花', '杨笑笑'}  # people (and a cat) in the dialogues, not vocabulary
def clean(w):
    w = w.replace('(', '（').replace(')', '）')
    return re.sub(r'（[^）]*）', '', w).strip()
lessons = []
for b in ('1', '2'):
    for c in sorted(d['book'][b], key=int):
        ws = []
        for w in d['book'][b][c]:
            w = clean(w)
            if w and w not in NAMES and w not in ws: ws.append(w)
        lessons.append({'book': int(b), 'lesson': int(c), 'words': ws})
hanzi = {int(r['no']): re.sub(r'\d+$', '', r['word']) for r in csv.DictReader(open(skill + '/syllabus/hsk-1.csv', encoding='utf-8'))}
assert len(hanzi) == 300 and len(lessons) == 30
ts = '''// The words of HSK Standard Course 1 and 2 (Beijing Language and Culture University Press), lesson by
// lesson, in the order the books teach them. Used by the strip of section 02.
// Source: the community Anki deck RoelTim/mandarin-hsk-standardcourse-anki, which tags every card with
// its book and chapter. Checked against the one lesson the site already cites (book 2, lesson 3). The
// names of the people in the dialogues are left out. The books follow the earlier HSK 2.0 levels, so
// not every word of today's HSK 1 list is in them.
// HSK1_HANZI gives the hanzi of each word number of the official HSK 1 list (syllabus of November 2025),
// from the skill repository. Generated; do not edit by hand.
export const BOOK_SOURCE = 'https://github.com/RoelTim/mandarin-hsk-standardcourse-anki';
export const bookLessons: { book: number; lesson: number; words: string[] }[] = %s;
export const HSK1_HANZI: Record<number, string> = %s;
''' % (json.dumps(lessons, ensure_ascii=False).replace('}, {', '},\n  {').replace('[{', '[\n  {').replace('}]', '},\n]'),
       json.dumps(hanzi, ensure_ascii=False))
open(out, 'w', encoding='utf-8').write(ts)
print(sum(len(l['words']) for l in lessons), 'book words in', len(lessons), 'lessons')
