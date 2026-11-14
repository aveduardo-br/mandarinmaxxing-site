// Tiles ("ladrilhos"): 28px squares with one pixel-font hanzi each. See docs/ladrilhos.md.
// Every tile change on the site uses the same transition: the tile closes and opens again like a
// small flap, in hard steps, and a group of tiles changes in a wave from the top-left corner.
export type TileVal = { ch: string; bg: string; fg?: string } | null;
export type Slot = { el: HTMLElement; span: HTMLElement; val: TileVal };

export const TILE = 28;
export const ORANGE = '#D2430E';
// the five muted colours, used in a cycle for everything that is not the one orange highlight
export const MUTED = ['#7FA3B0', '#9A9C5C', '#C29A5B', '#A0938B', '#E8835A'];
export const DIM = { bg: '#1E1E1E', fg: '#8A8A8A' };

export const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function makeSlot(parent: HTMLElement, extraClass = ''): Slot {
  const el = document.createElement('div');
  el.className = `tile ${extraClass}`.trim();
  const span = document.createElement('span');
  el.appendChild(span);
  parent.appendChild(el);
  return { el, span, val: null };
}

export function applyTile(slot: Slot, v: TileVal) {
  slot.val = v;
  if (!v) {
    slot.el.style.visibility = 'hidden';
    return;
  }
  slot.span.textContent = v.ch;
  slot.span.style.color = v.fg ?? '';
  slot.el.style.backgroundColor = v.bg;
  slot.el.style.visibility = 'visible';
}

export const sameTile = (a: TileVal, b: TileVal) =>
  (!a && !b) || (!!a && !!b && a.ch === b.ch && a.bg === b.bg && (a.fg ?? '') === (b.fg ?? ''));

const DUR = 110;
const EASE = 'steps(3, end)';
const OUT = [{ transform: 'scaleY(1)' }, { transform: 'scaleY(0)' }];
const IN = [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }];
/** Delay between neighbouring tiles in a wave. */
export const WAVE = 28;
/** Time one tile takes to close and open. */
export const FLIP = DUR * 2;

/** Flip one tile to a new value after `delay` ms. Does nothing if the value is the same. */
export function flipTile(slot: Slot, v: TileVal, delay = 0) {
  if (sameTile(slot.val, v)) return;
  if (reduceMotion()) return applyTile(slot, v);
  // remember the target now, so a second call during the wave compares against it
  const had = !!slot.val;
  slot.val = v;
  window.setTimeout(() => {
    const comeIn = () => {
      applyTile(slot, v);
      if (v) slot.el.animate(IN, { duration: DUR, easing: EASE });
    };
    if (had) {
      const a = slot.el.animate(OUT, { duration: DUR, easing: EASE, fill: 'forwards' });
      a.onfinish = () => {
        a.cancel();
        comeIn();
      };
    } else comeIn();
  }, delay);
}

/**
 * A centred row of tiles whose length changes (a word, a chunk). Slots are absolutely positioned
 * around the centre of `row`; `vals` are flipped in from the left.
 */
export function setRow(row: HTMLElement, slots: Slot[], vals: TileVal[], animate = true) {
  const n = vals.length;
  slots.forEach((slot, i) => {
    const v = i < n ? vals[i] : null;
    if (i < n) slot.el.style.left = `calc(50% + ${(i - n / 2) * TILE}px)`;
    if (animate) flipTile(slot, v, i * WAVE);
    else applyTile(slot, v);
  });
  row.style.setProperty('--n', String(n));
}
