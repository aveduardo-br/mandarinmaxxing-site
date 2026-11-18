// Interaction sounds (cuelume: fourteen cues synthesized live with Web Audio, no audio files, MIT).
// Controls carry data-cuelume-* attributes (tap, select, toggle, open, close, navigate) and bind()
// plays them; outcomes that depend on state (a panel opening or closing, a copy that worked) call cue().
// Rules from cuelume's own guidance: one cue per job, never on hover or page load, "subtle" for frequent
// actions, and a way to turn sound off. The choice is kept in this browser (localStorage, if allowed).
import { bind, play, setEnabled, setTheme, setVolume } from 'cuelume';
import { setFlipSound } from './tiles';
import type { PlayOptions, SoundName } from 'cuelume';

type Cue = SoundName;
const KEY = 'mm-sound';
const THEME = 'default'; // cuelume themes: default, mech, bubble, press
// One general volume for every sound on the site (0 to 1): cuelume's cues and the tile flip both go
// through it. Kept very low on purpose.
const VOLUME = 0.2;
const FLIP_PEAK = 0.12; // the flip's own level before the general volume (0.12 × 0.2 ≈ 0.024)

let on = true;
const read = () => {
  try {
    return localStorage.getItem(KEY) !== 'off';
  } catch {
    return true;
  }
};
const save = (v: boolean) => {
  try {
    localStorage.setItem(KEY, v ? 'on' : 'off');
  } catch {
    /* private mode or blocked storage: the choice lasts for this page only */
  }
};

/** Play a cue from code (call it only from a user's click or key press). */
export function cue(name: Cue, options: PlayOptions = {}) {
  if (on) play(name, { emphasis: 'subtle', ...options });
}

// The tile flip: a very short burst of filtered noise, like one flap of a split-flap board. Each tile of
// a wave plays one as it starts to turn (at most one every 22 ms, so a long wave rattles instead of
// buzzing), a little higher each time. Its own small Web Audio graph, separate from
// cuelume's cues; it can only start after the first click or tap on the page (browsers keep audio off
// until then), so hovering before any click is silent.
let ac: AudioContext | null = null;
let master: GainNode | null = null;
let noise: AudioBuffer | null = null;
let lastTick = 0;
// The pitch climbs a little with each tile of a wave (3% per tile, up to 20 tiles), and starts again
// from the bottom when a new wave begins (a pause of more than 250 ms between ticks).
let step = 0;
const RISE = 0.03;
function audio() {
  if (!ac) {
    try {
      ac = new AudioContext();
    } catch {
      return null;
    }
    master = ac.createGain();
    master.gain.value = VOLUME;
    master.connect(ac.destination);
    noise = ac.createBuffer(1, Math.ceil(ac.sampleRate * 0.04), ac.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  return ac;
}
export function tick() {
  if (!on) return;
  const now = performance.now();
  if (now - lastTick < 22) return;
  const ctx = audio();
  if (!ctx || ctx.state !== 'running' || !noise) return;
  step = now - lastTick > 250 ? 0 : Math.min(step + 1, 20);
  lastTick = now;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 1900 * (1 + RISE * step) * (0.98 + Math.random() * 0.04);
  bp.Q.value = 1.4;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(FLIP_PEAK, t + 0.002);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
  src.connect(bp).connect(g).connect(master!);
  src.start(t);
  src.stop(t + 0.04);
}
// the first click, tap or key press on the page lets the flip sound start
const unlockTicks = () => {
  const ctx = audio();
  if (ctx && ctx.state !== 'running') void ctx.resume();
};

/** Every [data-sound-toggle] button turns sound on and off; aria-pressed drives its look. */
function paintToggles() {
  document.querySelectorAll<HTMLElement>('[data-sound-toggle]').forEach((b) => {
    b.setAttribute('aria-pressed', String(on));
    b.setAttribute('aria-label', on ? 'Sound on (turn off)' : 'Sound off (turn on)');
  });
}

export function initSound() {
  on = read();
  setTheme(THEME);
  setVolume(VOLUME);
  setEnabled(on);
  bind();
  setFlipSound(tick);
  for (const ev of ['pointerdown', 'keydown']) addEventListener(ev, unlockTicks, { once: true, passive: true });
  paintToggles();
  document.querySelectorAll<HTMLElement>('[data-sound-toggle]').forEach((b) =>
    b.addEventListener('click', () => {
      on = !on;
      // bind() has already played the toggle (in its capture listener) when turning off; turning on, the
      // engine was still muted at that point, so the cue is played here once it is on
      setEnabled(on);
      if (on) play('toggle');
      save(on);
      paintToggles();
    }),
  );
}
