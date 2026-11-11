"""Regenerate public/fonts/zpix-site.woff from the full Zpix font.

Usage: python3 scripts/subset-zpix.py path/to/zpix.ttf
Download zpix.ttf from https://github.com/SolidZORO/zpix-pixel-font/releases/latest
Requires fontTools (pip install fonttools).
"""
import glob
import subprocess
import sys
import tempfile

src = sys.argv[1]
text = ''.join(
    open(f, encoding='utf-8').read()
    for f in glob.glob('src/**/*.*', recursive=True)
    if f.endswith(('.astro', '.ts'))
)
cjk = ''.join(sorted({c for c in text if '　' <= c <= '鿿' or '＀' <= c <= '￯'}))
with tempfile.NamedTemporaryFile('w', suffix='.txt', delete=False, encoding='utf-8') as t:
    t.write(cjk)
subprocess.run(
    [
        'pyftsubset', src,
        '--unicodes=U+0020-007E,U+00A0-00FF,U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+2026,'
        'U+00B7,U+2190-21FF,U+2039,U+203A,U+2713,U+25A0,U+25CB',
        f'--text-file={t.name}', '--flavor=woff', "--layout-features=*",
        '--output-file=public/fonts/zpix-site.woff',
    ],
    check=True,
)
print(f'{len(cjk)} CJK characters → public/fonts/zpix-site.woff')
