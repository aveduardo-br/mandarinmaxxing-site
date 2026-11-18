"""Add the CJK characters the site uses but public/fonts/zpix-site.woff lacks, from the Zpix source.

Usage: python3 scripts/add-zpix-glyphs.py path/to/zpix.sfd
The .sfd is the font's source in the Zpix repository (src/zpix.sfd). Zpix is a bitmap font: the .sfd
keeps one 12px bitmap per character (BDFChar records, rows in ASCII85). Each missing character is drawn
the way the rest of zpix-site.woff is: one 100-unit square per pixel (1200 units per em), merged into
horizontal runs, advance = bitmap width × 100. Characters already in the font are left as they are.
Requires fontTools. (scripts/subset-zpix.py rebuilds the whole file from a zpix.ttf instead.)
"""
import glob
import sys

from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib import TTFont

FONT = 'public/fonts/zpix-site.woff'
PX = 100


def a85(s):
    out = bytearray()
    i = 0
    s = s.strip()
    while i < len(s):
        if s[i] == 'z':
            out += b'\0\0\0\0'
            i += 1
            continue
        chunk = s[i:i + 5]
        i += 5
        n = len(chunk)
        chunk += 'u' * (5 - n)
        v = 0
        for ch in chunk:
            v = v * 85 + (ord(ch) - 33)
        out += v.to_bytes(4, 'big')[: n - 1 if n < 5 else 4]
    return bytes(out)


def bitmaps(path, wanted):
    lines = open(path, encoding='latin-1').read().split('\n')
    found = {}
    for k, line in enumerate(lines):
        if not line.startswith('BDFChar:'):
            continue
        _, _orig, enc, width, xmin, xmax, ymin, ymax = line.split()[:8]
        enc = int(enc)
        if enc not in wanted:
            continue
        width, xmin, xmax, ymin, ymax = map(int, (width, xmin, xmax, ymin, ymax))
        data = a85(lines[k + 1])
        w, h = xmax - xmin + 1, ymax - ymin + 1
        bpr = (w + 7) // 8
        rows = [[(data[r * bpr + c // 8] >> (7 - c % 8)) & 1 for c in range(w)] for r in range(h)]
        found[enc] = (width, xmin, ymax, rows)
    return found


def glyph(width, xmin, ymax, rows):
    pen = TTGlyphPen(None)
    for r, row in enumerate(rows):
        y = (ymax - r) * PX
        c = 0
        while c < len(row):
            if not row[c]:
                c += 1
                continue
            start = c
            while c < len(row) and row[c]:
                c += 1
            x0, x1 = (xmin + start) * PX, (xmin + c) * PX
            # clockwise, like the rest of the font: up, right, down
            pen.moveTo((x0, y))
            pen.lineTo((x0, y + PX))
            pen.lineTo((x1, y + PX))
            pen.lineTo((x1, y))
            pen.closePath()
    return pen.glyph(), width * PX


# The characters the site draws: every .astro/.ts file, except two data files whose words are never
# drawn in the pixel font: book.ts (the textbooks' word lists, for the strip of section 02) and, from
# topics.ts, the words behind "+N more" (only the five shown words of each situation are kept).
import re
SKIP = ('src/data/book.ts', 'src/data/topics.ts')
text = ''.join(open(f, encoding='utf-8').read() for f in glob.glob('src/**/*.*', recursive=True)
               if f.endswith(('.astro', '.ts')) and f.replace('\\', '/') not in SKIP)
text += ''.join(re.findall(r'"hanzi": "([^"]+)"', open('src/data/topics.ts', encoding='utf-8').read()))
cjk = {ord(c) for c in text if '　' <= c <= '鿿' or '＀' <= c <= '￯'}
font = TTFont(FONT)
have = set(font.getBestCmap())
missing = sorted(cjk - have)
found = bitmaps(sys.argv[1], set(missing))
order = list(font.getGlyphOrder())
glyf = font['glyf']
for cp in missing:
    if cp not in found:
        continue  # not a character Zpix draws (e.g. the ends of a range in a regular expression)
    name = f'uni{cp:04X}'
    g, adv = glyph(*found[cp])
    order.append(name)
    font.setGlyphOrder(order)
    glyf.glyphOrder = order
    glyf.glyphs[name] = g
    g.recalcBounds(glyf)
    font['hmtx'][name] = (adv, getattr(g, 'xMin', 0))
    for t in font['cmap'].tables:
        if t.isUnicode():
            t.cmap[cp] = name
font['maxp'].numGlyphs = len(order)
font.flavor = 'woff'
font.save(FONT)
print(f'{len(found)} characters added to {FONT}')
