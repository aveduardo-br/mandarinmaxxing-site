// Jumping to a place in the page (a link to #something: the side nav, the top bar menu, "How to
// install", links inside the text). Instead of the browser's own jump, which puts the target at the very
// top and gets there in a rush, the page glides: it starts slowly, speeds up and slows down to stop
// (ease in-out), and the target comes to rest a little above the middle of the screen.
// The destination is read again on every frame, so a question that opens on the way (and pushes things
// down) is still where the glide ends. Any scroll, touch or key from the person stops it at once.

const LINE_WIDE = 0.32; // where the target's top rests, as a part of the screen's height
const LINE_NARROW = 0.18; // phones and tablets have less height to give: closer to the top bar
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

let frame = 0;
const stop = () => {
  cancelAnimationFrame(frame);
  frame = 0;
};

function destOf(el: HTMLElement | null) {
  const max = document.documentElement.scrollHeight - innerHeight;
  if (!el) return 0; // #top
  const narrow = matchMedia('(max-width: 1180px)').matches;
  const line = Math.max(narrow ? 88 : 48, innerHeight * (narrow ? LINE_NARROW : LINE_WIDE));
  return Math.max(0, Math.min(max, el.getBoundingClientRect().top + scrollY - line));
}

export function glideTo(el: HTMLElement | null) {
  stop();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return void scrollTo({ top: destOf(el), behavior: 'instant' });
  const from = scrollY;
  const dist = Math.abs(destOf(el) - from);
  // longer for a longer way, within limits: never a snap, never a wait
  const duration = Math.max(700, Math.min(1500, 500 + dist * 0.22));
  const t0 = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - t0) / duration);
    scrollTo({ top: from + (destOf(el) - from) * easeInOut(t), behavior: 'instant' });
    frame = t < 1 ? requestAnimationFrame(step) : 0;
  };
  frame = requestAnimationFrame(step);
}

export function initJump() {
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    const hash = a?.getAttribute('href');
    if (!hash || hash === '#') return;
    const el = hash === '#top' ? null : document.getElementById(hash.slice(1));
    if (hash !== '#top' && !el) return;
    e.preventDefault();
    history.pushState(null, '', hash);
    // after the other click handlers (a menu closing, a question opening)
    requestAnimationFrame(() => glideTo(el));
  });
  for (const ev of ['wheel', 'touchstart', 'keydown']) addEventListener(ev, stop, { passive: true });
}
