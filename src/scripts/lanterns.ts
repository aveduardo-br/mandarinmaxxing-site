// The three tile lanterns of the footer (Paper: "08 Footer — opção E"). One canvas.
//
// What moves:
// - each lantern hangs from the top edge of the footer by a string and swings like a pendulum; the
//   pointer pushes it sideways as it passes;
// - the lantern itself is rigid; the fringe and the tassel under it are ropes of tiles that lag
//   behind and keep moving on their own;
// - a push also turns the lantern on its own axis (fake 3D): the columns of tiles slide around the
//   body and narrow towards the edge, then a spring brings the front back. Every hanzi belongs to
//   one tile of the surface (src/data/lanterns.ts), so the same hanzi always comes back to the same
//   place. At rest the lantern is drawn exactly as the flat design.
import { lanterns, PANEL_W, type Lantern } from '../data/lanterns';
import { reduceMotion } from './tiles';
import { release } from './sky-lanterns';

const T = 14; // tile size
const RED = '#C8281E';
const GOLD = '#E3B341';
const INK = 'rgba(0,0,0,0.18)'; // hanzi, tone on tone over either colour
const STRING = '#2a2a2a';
export const MARGIN = 120; // room on each side of the panel for the swing
const HALF_PI = Math.PI / 2;

// Easter egg: clicking the middle lantern lights it up a little more each time; fully lit, small
// lanterns rise out of the footer (src/scripts/sky-lanterns.ts).
const CLICKS = 8; // clicks to light it fully
const RELEASED = 26; // small lanterns let go
const GLOW = '255,72,40';

// physics, in px and seconds
const GRAVITY = 2200;
const SWING_DAMP = 0.9;
const SWING_MAX = 0.26;
const SPIN_SPRING = 9; // pulls the front back, slowly
const SPIN_DAMP = 2.4;
const SPIN_MAX = 0.95; // rad; the back never comes fully round
const ROPE_GRAVITY = 2600;
const ROPE_DRAG = 0.985;
const STEP = 1 / 120;

type Rope = { dx: number; n: number; x: Float64Array; y: Float64Array; px: Float64Array; py: Float64Array; sx: number[]; w: number[] };
type Body = {
  d: Lantern;
  w: number; // rigid part, px
  h: number;
  pivot: number; // x of the string on the canvas
  len: number; // pivot to the middle of the body
  front: HTMLCanvasElement;
  back: HTMLCanvasElement;
  strip: HTMLCanvasElement; // rope tiles side by side
  turned: HTMLCanvasElement; // the body while it is turned, drawn upright
  tg: CanvasRenderingContext2D;
  ropes: Rope[];
  a: number; // swing angle
  va: number;
  s: number; // turn on its own axis
  vs: number;
};

export const panelHeight = Math.max(...lanterns.map((d) => d.drop + (d.rows.length + Math.max(...d.ropes.map((r) => r.tiles.length))) * T)) + 20;

export async function mountLanterns(canvas: HTMLCanvasElement, area: HTMLElement) {
  const text = lanterns.map((d) => d.phrase.text + d.rows.map((r) => r.fh + r.bh).join('') + d.ropes.map((r) => r.tiles.map((t) => t.ch).join('')).join('')).join('');
  try {
    await Promise.all([document.fonts.load('500 12px Zpix', text), document.fonts.load('500 24px Zpix', text)]);
  } catch {
    /* draw with whatever font is there */
  }

  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const W = PANEL_W + MARGIN * 2;
  const H = panelHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  const ctx = canvas.getContext('2d')!;

  const sheet = (w: number, h: number) => {
    const c = document.createElement('canvas');
    c.width = Math.ceil(w * dpr);
    c.height = Math.ceil(h * dpr);
    const g = c.getContext('2d')!;
    g.scale(dpr, dpr);
    g.textBaseline = 'alphabetic';
    return [c, g] as const;
  };
  const tile = (g: CanvasRenderingContext2D, x: number, y: number, k: string, ch: string) => {
    g.fillStyle = k === 'G' ? GOLD : RED;
    g.fillRect(x, y, T, T);
    if (ch === '.') return;
    g.fillStyle = INK;
    g.font = '500 12px Zpix';
    g.fillText(ch, x + 1, y + 11);
  };

  const bodies: Body[] = lanterns.map((d) => {
    const w = d.cols * T;
    const h = d.rows.length * T;
    const [front, gf] = sheet(w, h);
    const [back, gb] = sheet(w, h);
    d.rows.forEach((row, j) => {
      const x0 = w / 2 - (row.hw + 0.5) * T;
      [...row.f].forEach((k, i) => {
        tile(gf, x0 + i * T, j * T, k, [...row.fh][i]);
        tile(gb, x0 + i * T, j * T, k, [...row.bh][i]);
      });
    });
    // the gold phrase, each hanzi over 2×2 tiles
    gf.fillStyle = GOLD;
    gf.font = '500 24px Zpix';
    [...d.phrase.text].forEach((ch, i) => {
      const x = d.phrase.x + 3 + (d.phrase.vertical ? 0 : i * 28);
      const y = d.phrase.y + 22 + (d.phrase.vertical ? i * 28 : 0);
      gf.fillText(ch, x, y);
    });

    const total = d.ropes.reduce((n, r) => n + r.tiles.reduce((m, t) => m + [...t.ch].length, 0), 0);
    const [strip, gs] = sheet(total * T, T);
    let sx = 0;
    const top = d.drop + h;
    const pivot = MARGIN + d.x + w / 2;
    const ropes = d.ropes.map((r) => {
      const n = r.tiles.length;
      const rope: Rope = { dx: r.dx, n, x: new Float64Array(n + 1), y: new Float64Array(n + 1), px: new Float64Array(n + 1), py: new Float64Array(n + 1), sx: [], w: [] };
      r.tiles.forEach((t) => {
        const chars = [...t.ch];
        rope.sx.push(sx);
        rope.w.push(chars.length * T);
        chars.forEach((ch) => {
          tile(gs, sx, 0, t.k, ch);
          sx += T;
        });
      });
      for (let i = 0; i <= n; i++) {
        rope.x[i] = rope.px[i] = pivot + r.dx * T;
        rope.y[i] = rope.py[i] = top + i * T;
      }
      return rope;
    });
    const [turned, tg] = sheet(w, h);
    return { d, w, h, pivot, len: d.drop + h / 2, front, back, strip, turned, tg, ropes, a: 0, va: 0, s: 0, vs: 0 };
  });

  // ---------- drawing ----------
  // One row of the turned body, into the lantern's own upright sheet (so tiles stay edge to edge;
  // the swing then rotates the finished picture).
  const drawRow = (b: Body, img: HTMLCanvasElement, j: number, hw: number, isBack: boolean, shade: number) => {
    const g = b.tg;
    const r = (hw + 0.5) * T;
    const cx = b.w / 2;
    const n = (hw * 2 + 1) * 2; // two slices per tile
    const base = (isBack ? Math.PI : 0) + b.s;
    for (let k = 0; k < n; k++) {
      const u0 = -1 + (2 * k) / n;
      const u1 = -1 + (2 * (k + 1)) / n;
      let a0 = Math.asin(u0) + base;
      let a1 = Math.asin(u1) + base;
      const turn = Math.round((a0 + a1) / 2 / (Math.PI * 2)) * Math.PI * 2;
      a0 -= turn;
      a1 -= turn;
      if (a1 <= -HALF_PI || a0 >= HALF_PI) continue; // facing away
      a0 = Math.max(a0, -HALF_PI);
      a1 = Math.min(a1, HALF_PI);
      const x0 = cx + r * Math.sin(a0);
      const x1 = cx + r * Math.sin(a1);
      if (x1 - x0 < 0.15) continue;
      const wd = Math.min(x1 - x0 + 0.6, cx + r - x0);
      g.drawImage(img, (cx + u0 * r) * dpr, j * T * dpr, (T / 2) * dpr, T * dpr, x0, j * T, wd, T);
      if (shade > 0.01) {
        // darker towards the edge while it is turned: reads as a round body
        g.globalAlpha = shade * (1 - Math.cos((a0 + a1) / 2));
        g.fillStyle = '#000';
        g.fillRect(x0, j * T, wd, T);
        g.globalAlpha = 1;
      }
    }
  };

  let charge = 0; // 0 to 1: how lit the middle lantern is
  let shown = 0; // what is drawn; follows charge smoothly
  let clock = 0;
  const lit = bodies[1];

  const draw = () => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    for (const b of bodies) {
      const glow = b === lit ? shown * (0.9 + 0.1 * Math.sin(clock * 5)) : 0;
      ctx.save();
      ctx.translate(b.pivot, 0);
      ctx.rotate(b.a);
      if (glow > 0.01) {
        // light around the body
        const cy = b.d.drop + b.h / 2;
        const rad = b.w * (0.75 + 0.35 * glow);
        const halo = ctx.createRadialGradient(0, cy, b.w * 0.2, 0, cy, rad);
        halo.addColorStop(0, `rgba(${GLOW},${0.5 * glow})`);
        halo.addColorStop(1, `rgba(${GLOW},0)`);
        ctx.fillStyle = halo;
        ctx.fillRect(-rad, cy - rad, rad * 2, rad * 2);
      }
      ctx.fillStyle = STRING;
      ctx.fillRect(-1, 0, 2, b.d.drop);
      ctx.translate(-b.w / 2, b.d.drop);
      if (Math.abs(b.s) < 0.003) ctx.drawImage(b.front, 0, 0, b.w, b.h);
      else {
        const shade = Math.min(0.5, Math.abs(b.s) * 0.6);
        b.tg.clearRect(0, 0, b.w, b.h);
        b.d.rows.forEach((row, j) => {
          drawRow(b, b.back, j, row.hw, true, shade);
          drawRow(b, b.front, j, row.hw, false, shade);
        });
        ctx.drawImage(b.turned, 0, 0, b.w, b.h);
      }
      if (glow > 0.01) {
        // the lantern's own colours added to themselves: a more vivid red and gold
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = 0.55 * glow;
        ctx.drawImage(Math.abs(b.s) < 0.003 ? b.front : b.turned, 0, 0, b.w, b.h);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      }
      ctx.restore();
      for (const r of b.ropes) {
        for (let i = 0; i < r.n; i++) {
          const dx = r.x[i + 1] - r.x[i];
          const dy = r.y[i + 1] - r.y[i];
          ctx.save();
          ctx.translate((r.x[i] + r.x[i + 1]) / 2, (r.y[i] + r.y[i + 1]) / 2);
          ctx.rotate(Math.atan2(dy, dx) - HALF_PI);
          ctx.drawImage(b.strip, r.sx[i] * dpr, 0, r.w[i] * dpr, T * dpr, -r.w[i] / 2, -T / 2, r.w[i], T + 0.5);
          ctx.restore();
        }
      }
    }
  };

  draw();
  if (reduceMotion()) return;

  // ---------- pointer ----------
  const mouse = { x: 0, y: 0, vx: 0, vy: 0, on: false, t: 0 };
  let idle = 0;
  /** Distance from the pivot down the lantern if (x, y) is on its rigid body, else -1. */
  const hit = (b: Body, x: number, y: number) => {
    const dx = x - b.pivot;
    const cos = Math.cos(b.a);
    const sin = Math.sin(b.a);
    const lx = dx * cos + y * sin;
    const ly = -dx * sin + y * cos;
    const row = b.d.rows[Math.floor((ly - b.d.drop) / T)];
    return row && Math.abs(lx) < (row.hw + 0.5) * T + 8 ? ly : -1;
  };
  const at = (e: PointerEvent) => {
    const box = canvas.getBoundingClientRect();
    return [((e.clientX - box.left) / box.width) * W, ((e.clientY - box.top) / box.height) * H] as const;
  };
  let lastClick = 0;
  let letGo = false; // fully lit: the small lanterns are leaving, clicks wait
  area.addEventListener('pointerdown', (e) => {
    const [x, y] = at(e);
    if (letGo || hit(lit, x, y) < 0) return;
    charge = Math.min(1, charge + 1 / CLICKS);
    lastClick = performance.now();
    lit.vs += (x < lit.pivot ? 1 : -1) * 0.9; // a tap turns it a little
    if (charge >= 1) {
      letGo = true;
      release(area, RELEASED);
    }
    wake();
  });
  area.addEventListener('pointermove', (e) => {
    const [x, y] = at(e);
    area.style.cursor = hit(lit, x, y) >= 0 ? 'pointer' : '';
    const now = performance.now();
    const dt = Math.max(8, now - mouse.t) / 1000;
    if (mouse.on && dt < 0.2) {
      mouse.vx += ((x - mouse.x) / dt - mouse.vx) * 0.5;
      mouse.vy += ((y - mouse.y) / dt - mouse.vy) * 0.5;
    } else mouse.vx = mouse.vy = 0;
    mouse.x = x;
    mouse.y = y;
    mouse.t = now;
    mouse.on = true;
    wake();
  });
  area.addEventListener('pointerleave', () => (mouse.on = false));

  // ---------- physics ----------
  const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
  const step = (h: number) => {
    let moving = 0;
    for (const b of bodies) {
      if (mouse.on) {
        const ly = hit(b, mouse.x, mouse.y);
        if (ly >= 0 && Math.abs(mouse.vx) > 30) {
          // touching: the body follows the pointer sideways and is turned by it
          const reach = Math.max(80, ly);
          b.va += (clamp((-mouse.vx / reach) * 0.45, 1.1) - b.va) * Math.min(1, 10 * h);
          b.vs += (clamp(mouse.vx * 0.005, 2.6) - b.vs) * Math.min(1, 8 * h);
        }
      }
      b.va += (-(GRAVITY / b.len) * Math.sin(b.a) - SWING_DAMP * b.va) * h;
      b.a += b.va * h;
      if (Math.abs(b.a) > SWING_MAX) {
        b.a = clamp(b.a, SWING_MAX);
        b.va *= -0.3;
      }
      b.vs += (-SPIN_SPRING * b.s - SPIN_DAMP * b.vs) * h;
      b.s += b.vs * h;
      if (Math.abs(b.s) > SPIN_MAX) {
        b.s = clamp(b.s, SPIN_MAX);
        b.vs *= -0.2;
      }
      moving = Math.max(moving, Math.abs(b.a) * 4, Math.abs(b.va), Math.abs(b.s) * 4, Math.abs(b.vs));

      const cos = Math.cos(b.a);
      const sin = Math.sin(b.a);
      const top = b.d.drop + b.h;
      for (const r of b.ropes) {
        // the rope hangs from the base of the lantern, which swings and turns
        const ax = r.dx * T * Math.cos(b.s);
        r.x[0] = b.pivot + ax * cos - top * sin;
        r.y[0] = ax * sin + top * cos;
        for (let i = 1; i <= r.n; i++) {
          let vx = (r.x[i] - r.px[i]) * ROPE_DRAG;
          let vy = (r.y[i] - r.py[i]) * ROPE_DRAG;
          if (mouse.on) {
            const mx = r.x[i] - mouse.x;
            const my = r.y[i] - mouse.y;
            if (mx * mx + my * my < 18 * 18) {
              vx += (mouse.vx * h - vx) * 0.35;
              vy += (mouse.vy * h - vy) * 0.35;
            }
          }
          r.px[i] = r.x[i];
          r.py[i] = r.y[i];
          r.x[i] += vx;
          r.y[i] += vy + ROPE_GRAVITY * h * h;
          moving = Math.max(moving, (Math.abs(vx) + Math.abs(vy)) * 6);
        }
        for (let it = 0; it < 6; it++) {
          for (let i = 0; i < r.n; i++) {
            const dx = r.x[i + 1] - r.x[i];
            const dy = r.y[i + 1] - r.y[i];
            const dist = Math.hypot(dx, dy) || 1;
            const k = (dist - T) / dist;
            if (i === 0) {
              r.x[1] -= dx * k;
              r.y[1] -= dy * k;
            } else {
              r.x[i] += dx * k * 0.5;
              r.y[i] += dy * k * 0.5;
              r.x[i + 1] -= dx * k * 0.5;
              r.y[i + 1] -= dy * k * 0.5;
            }
          }
        }
      }
    }
    return moving;
  };

  let running = false;
  let visible = false;
  let last = 0;
  const frame = (now: number) => {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    let moving = 0;
    for (let n = Math.max(1, Math.round(dt / STEP)); n > 0; n--) moving = step(STEP);
    // the pointer's speed fades if it stops sending moves
    mouse.vx *= 0.85;
    mouse.vy *= 0.85;
    // the light: stays while the clicks keep coming, then fades; after letting go it fades and resets
    clock += dt;
    if (letGo) {
      if (now - lastClick > 1600) charge = Math.max(0, charge - dt * 0.7);
      if (charge === 0) letGo = false;
    } else if (now - lastClick > 2500) charge = Math.max(0, charge - dt * 0.12);
    shown += (charge - shown) * Math.min(1, dt * 8);
    if (shown < 0.004 && charge === 0) shown = 0;
    if (shown > 0) moving = 1;
    idle = moving < 0.02 ? idle + dt : 0;
    if (idle > 0.4 || !visible) {
      // settled: draw the flat design once and stop
      running = false;
      if (idle > 0.4) for (const b of bodies) b.a = b.va = b.s = b.vs = 0;
      draw();
      return;
    }
    draw();
    requestAnimationFrame(frame);
  };
  function wake() {
    if (running || !visible) return;
    running = true;
    idle = 0;
    last = performance.now();
    requestAnimationFrame(frame);
  }

  // a small sway the first time the footer comes into view
  let greeted = false;
  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible && !greeted) {
      greeted = true;
      bodies.forEach((b, i) => {
        b.va = [0.3, -0.25, 0.28][i % 3];
        b.vs = [0.9, -0.8, 0.85][i % 3];
      });
    }
    if (visible) wake();
  }).observe(canvas);
}
