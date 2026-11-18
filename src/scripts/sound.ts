// Interaction sounds (cuelume: fourteen cues synthesized live with Web Audio, no audio files, MIT).
// Controls carry data-cuelume-* attributes (tap, select, toggle, open, close, navigate) and bind()
// plays them; outcomes that depend on state (a panel opening or closing, a copy that worked) call cue().
// Rules from cuelume's own guidance: one cue per job, never on hover or page load, "subtle" for frequent
// actions, and a way to turn sound off. The choice is kept in this browser (localStorage, if allowed).
import { bind, play, setEnabled, setTheme } from 'cuelume';
import type { PlayOptions, SoundName } from 'cuelume';

type Cue = SoundName;
const KEY = 'mm-sound';
const THEME = 'default'; // cuelume themes: default, mech, bubble, press

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

/** Every [data-sound-toggle] button turns sound on and off; its aria-pressed and label follow. */
function paintToggles() {
  document.querySelectorAll<HTMLElement>('[data-sound-toggle]').forEach((b) => {
    b.setAttribute('aria-pressed', String(on));
    const label = b.querySelector<HTMLElement>('[data-sound-label]');
    if (label) label.textContent = on ? 'Sound on' : 'Sound off';
  });
}

export function initSound() {
  on = read();
  setTheme(THEME);
  setEnabled(on);
  bind();
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
