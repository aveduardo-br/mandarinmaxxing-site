// Easter egg of the footer: small lanterns that rise out of the footer (Paper: "08 Footer —
// lanterninha do easter egg", option 4). src/scripts/lanterns.ts calls release() when the middle
// lantern has been clicked until it is fully lit.
//
// - They come out from behind the footer's top line: the canvas is fixed over the page and nothing is
//   drawn below that line.
// - Each one turns slowly on its axis, always the same way. Its tiles go all the way round
//   (src/data/lanterns.ts, `mini`), so the dark red ribs keep coming.
// - Two red threads hang from the base and trail to the left, as if in a light wind.
import { mini } from '../data/lanterns';

const T = 14;
const RED = '#C8281E';
const DARK = '#A61F17';
const GOLD = '#E3B341';
const INK = 'rgba(0,0,0,0.18)';
const HALF_PI = Math.PI / 2;
const TAU = Math.PI * 2;
const W = 11 * T; // the lantern, before scaling
const BODY_TOP = 2 * T; // under the hook and the cap
const BODY_H = mini.rows.length * T;
const BASE_Y = BODY_TOP + BODY_H;

type Thread = { dx: number; n: number; x: Float64Array; y: Float64Array; px: Float64Array; py: Float64Array; sx: number };
type Sky = {
  x: number; // page coordinates of the top centre
  y: number;
  scale: number;
  rise: number; // px/s
  spin: number; // rad
  rate: number; // rad/s
  sway: number;
  phase: number;
  age: number;
  wait: number; // s before it starts
  threads: Thread[];
};

let sheet: HTMLCanvasElement | null = null; // every tile of the lantern, drawn once
let sheetScale = 1;
// in the sheet: the fixed tiles (hook, cap, base, threads) side by side on the first line, then one line
// per body row
const FIX = { hook: 0, cap: T, base: 4 * T, threads: 7 * T };

function buildSheet() {
  sheetScale = Math.min(2, window.devicePixelRatio || 1);
  const widest = Math.max(...mini.rows.map((r) => r.k.length)) * T;
  const c = document.createElement('canvas');
  c.width = widest * sheetScale;
  c.height = (mini.rows.length + 1) * T * sheetScale;
  const g = c.getContext('2d')!;
  g.scale(sheetScale, sheetScale);
  const tile = (x: number, y: number, bg: string, ch: string) => {
    g.fillStyle = bg;
    g.fillRect(x, y, T, T);
    g.fillStyle = INK;
    g.font = '500 12px Zpix';
    g.fillText(ch, x + 1, y + 11);
  };
  mini.rows.forEach((row, j) => [...row.k].forEach((k, i) => tile(i * T, (j + 1) * T, k === 'D' ? DARK : RED, [...row.h][i])));
  const fixed = [...mini.hook, ...mini.cap, ...mini.base].map((ch) => [GOLD, ch]);
  mini.ropes.forEach((r) => [...r.ch].forEach((ch) => fixed.push([RED, ch])));
  fixed.forEach(([bg, ch], i) => tile(i * T, 0, bg, ch));
  sheet = c;
}

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D;
let list: Sky[] = [];
let last = 0;
let line: HTMLElement; // the footer: nothing is drawn below its top edge
let clock = 0;

function resize() {
  if (!canvas) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
}

function drawOne(l: Sky) {
  const img = sheet!;
  const q = sheetScale;
  ctx.save();
  ctx.translate(l.x - scrollX, l.y - scrollY);
  ctx.scale(l.scale, l.scale);
  // threads first, so the base sits over their first tile
  for (const t of l.threads) {
    for (let i = 0; i < t.n; i++) {
      const dx = t.x[i + 1] - t.x[i];
      const dy = t.y[i + 1] - t.y[i];
      ctx.save();
      ctx.translate((t.x[i] + t.x[i + 1]) / 2, (t.y[i] + t.y[i + 1]) / 2);
      ctx.rotate(Math.atan2(dy, dx) - HALF_PI);
      ctx.drawImage(img, (t.sx + i * T) * q, 0, T * q, T * q, -T / 2, -T / 2, T, T + 0.5);
      ctx.restore();
    }
  }
  ctx.drawImage(img, FIX.hook * q, 0, T * q, T * q, -T / 2, 0, T, T);
  ctx.drawImage(img, FIX.cap * q, 0, 3 * T * q, T * q, -1.5 * T, T, 3 * T, T);
  mini.rows.forEach((row, j) => {
    const n = row.k.length;
    const r = (row.hw + 0.5) * T;
    const y = BODY_TOP + j * T;
    for (let i = 0; i < n; i++) {
      let a0 = (i / n) * TAU + l.spin;
      a0 -= Math.round((a0 + Math.PI / n) / TAU) * TAU; // the tile's middle within ±π
      let a1 = a0 + TAU / n;
      if (a1 <= -HALF_PI || a0 >= HALF_PI) continue; // on the far side
      a0 = Math.max(a0, -HALF_PI);
      a1 = Math.min(a1, HALF_PI);
      const x0 = r * Math.sin(a0);
      const x1 = r * Math.sin(a1);
      if (x1 - x0 < 0.2) continue;
      const wd = Math.min(x1 - x0 + 0.6, r - x0);
      ctx.drawImage(img, i * T * q, (j + 1) * T * q, T * q, T * q, x0, y, wd, T + 0.4);
      // darker towards the edge: a round body
      ctx.globalAlpha = 0.42 * (1 - Math.cos((a0 + a1) / 2));
      ctx.fillStyle = '#000';
      ctx.fillRect(x0, y, wd, T + 0.4);
      ctx.globalAlpha = 1;
    }
  });
  ctx.drawImage(img, FIX.base * q, 0, 3 * T * q, T * q, -1.5 * T, BASE_Y, 3 * T, T);
  ctx.restore();
}

function stepThreads(l: Sky, h: number, moved: number, rose: number) {
  // in the lantern's own unscaled frame; the lantern moving up and sideways shows as the opposite
  // drift of the free tiles
  const wind = -520 - 160 * Math.sin(clock * 1.7 + l.phase) - 90 * Math.sin(clock * 4.3 + l.phase * 2);
  for (const t of l.threads) {
    t.x[0] = t.dx * T;
    t.y[0] = BASE_Y + T;
    for (let i = 1; i <= t.n; i++) {
      const vx = (t.x[i] - t.px[i]) * 0.97;
      const vy = (t.y[i] - t.py[i]) * 0.97;
      t.px[i] = t.x[i];
      t.py[i] = t.y[i];
      t.x[i] += vx + wind * h * h - moved * 0.25;
      t.y[i] += vy + 900 * h * h + rose * 0.25;
    }
    for (let it = 0; it < 5; it++) {
      for (let i = 0; i < t.n; i++) {
        const dx = t.x[i + 1] - t.x[i];
        const dy = t.y[i + 1] - t.y[i];
        const dist = Math.hypot(dx, dy) || 1;
        const k = (dist - T) / dist;
        if (i === 0) {
          t.x[1] -= dx * k;
          t.y[1] -= dy * k;
        } else {
          t.x[i] += dx * k * 0.5;
          t.y[i] += dy * k * 0.5;
          t.x[i + 1] -= dx * k * 0.5;
          t.y[i + 1] -= dy * k * 0.5;
        }
      }
    }
  }
}

function frame(now: number) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  clock += dt;
  const dpr = canvas!.width / innerWidth;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  const edge = line.getBoundingClientRect().top;
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, innerWidth, Math.max(0, edge));
  ctx.clip();
  for (const l of list) {
    if (l.wait > 0) {
      l.wait -= dt;
      continue;
    }
    l.age += dt;
    const sway = Math.cos(l.age * 0.9 + l.phase) * l.sway * 0.9; // px/s
    const moved = (sway - 6) * dt; // a slow drift to the left with the wind
    const rose = l.rise * Math.min(1, l.age / 1.2) * dt; // eases into its speed
    l.x += moved;
    l.y -= rose;
    l.spin += l.rate * dt;
    for (let n = 2; n > 0; n--) stepThreads(l, dt / 2, moved / l.scale / 2, rose / l.scale / 2);
    if (l.y - scrollY < innerHeight + 40) drawOne(l);
  }
  ctx.restore();
  // gone once it is above the top of the page, or far above the screen
  list = list.filter((l) => l.y > -400 && l.y - scrollY > -innerHeight * 1.5 - 400);
  if (list.length) requestAnimationFrame(frame);
  else {
    canvas!.remove();
    canvas = null;
    removeEventListener('resize', resize);
  }
}

/** Let `count` small lanterns rise from behind the top edge of `footer`. */
export function release(footer: HTMLElement, count = 14) {
  if (!sheet) buildSheet();
  line = footer;
  const box = footer.getBoundingClientRect();
  const top = box.top + scrollY;
  let sx = FIX.threads;
  const fresh: Sky[] = Array.from({ length: count }, (_, i) => {
    const scale = 0.42 + Math.random() * 0.4;
    sx = FIX.threads;
    const threads = mini.ropes.map((r) => {
      const n = [...r.ch].length;
      const t: Thread = { dx: r.dx, n, x: new Float64Array(n + 1), y: new Float64Array(n + 1), px: new Float64Array(n + 1), py: new Float64Array(n + 1), sx };
      sx += n * T;
      for (let k = 0; k <= n; k++) {
        t.x[k] = t.px[k] = r.dx * T - k * 3;
        t.y[k] = t.py[k] = BASE_Y + T + k * T;
      }
      return t;
    });
    return {
      // spread over the width, each in its own lane so they do not bunch up
      x: innerWidth * (0.06 + (0.88 * (i + Math.random() * 0.8)) / count),
      y: top + 16 + Math.random() * 60,
      scale,
      rise: 34 + scale * 46 + Math.random() * 14, // the nearer (bigger) ones a little faster
      spin: Math.random() * TAU,
      rate: 0.42 + Math.random() * 0.22,
      sway: 6 + Math.random() * 10,
      phase: Math.random() * TAU,
      age: 0,
      wait: 0,
      threads,
    };
  });
  // they leave one after the other, in no particular order, the far (small) ones drawn first
  fresh
    .map((l) => [Math.random(), l] as const)
    .sort((a, b) => a[0] - b[0])
    .forEach(([, l], i) => (l.wait = i * 0.16 + Math.random() * 0.1));
  fresh.sort((a, b) => a.scale - b.scale);
  list = [...list, ...fresh].sort((a, b) => a.scale - b.scale);
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:5';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d')!;
    resize();
    addEventListener('resize', resize);
    last = performance.now();
    requestAnimationFrame(frame);
  }
}
