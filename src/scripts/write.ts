// The "rewrite" effect shared by the Chunks sentence and the Situations bar: the old words blur out
// one after another from left to right, and the new ones start coming in right behind them, as if the
// line were being written over. Each English word is one unit; each hanzi is its own unit. Styles
// live in global.css (.wu, .wu.gone, .wu.from, .wl).
import { reduceMotion } from './tiles';

export const OUT_STEP = 14; // ms between words going out
export const IN_STEP = 24; // ms between words coming in
export const OUT_FADE = 180; // each word's own fade out (matches .wu.gone in global.css)
export const IN_FADE = 260; // each word's own fade in
export const LAG = 70; // the first new word starts this long after the first old word leaves

const CJK = /[㐀-鿿＀-￯　-〿]/;

// Split HTML into word units, keeping the class of the span each word came from.
export function wrapWords(html: string): string {
  const box = document.createElement('span');
  box.innerHTML = html;
  const out = document.createElement('span');
  const unit = (text: string, cls: string, zh: boolean) => {
    const w = document.createElement('span');
    w.className = ['wu', cls, zh ? 'hanzi' : ''].filter(Boolean).join(' ');
    if (zh) w.lang = 'zh-Hans';
    w.textContent = text;
    out.appendChild(w);
  };
  const add = (text: string, cls: string) =>
    text.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) return void out.appendChild(document.createTextNode(part));
      if (CJK.test(part)) [...part].forEach((ch) => unit(ch, cls, CJK.test(ch)));
      else unit(part, cls, false);
    });
  box.childNodes.forEach((n) => add(n.textContent ?? '', n.nodeType === Node.ELEMENT_NODE ? (n as Element).className : ''));
  return out.innerHTML;
}

const units = (el: Element) => [...el.querySelectorAll<HTMLElement>('.wu')];

function fadeIn(words: HTMLElement[], start = 0) {
  words.forEach((w) => w.classList.add('gone', 'from'));
  void words[0]?.offsetWidth; // start the new words from hidden
  words.forEach((w, i) => {
    w.style.transitionDelay = `${start + i * IN_STEP}ms`;
    w.classList.remove('gone', 'from');
  });
}
function fadeOut(words: HTMLElement[]) {
  words.forEach((w, i) => {
    w.style.transitionDelay = `${i * OUT_STEP}ms`;
    w.classList.add('gone');
  });
  return words.length * OUT_STEP + OUT_FADE;
}

// A line that lives on its own (a block): old and new text share the same spot, so the new words can
// start right behind the old ones. `line` gets class "wline" (a one-cell grid); each text is a layer.
export function writeLine(line: HTMLElement, html: string) {
  line.classList.add('wline');
  const current = line.querySelector<HTMLElement>('.wl:not(.leaving)');
  if (current && current.dataset.html === html) return;
  const layer = document.createElement('span');
  layer.className = 'wl';
  layer.dataset.html = html;
  layer.innerHTML = wrapWords(html);
  if (!current || reduceMotion()) {
    line.replaceChildren(layer);
    return;
  }
  current.classList.add('leaving');
  const done = fadeOut(units(current));
  window.setTimeout(() => current.remove(), done + 40);
  line.appendChild(layer);
  fadeIn(units(layer), LAG);
}

// A sentence inside a paragraph (the Chunks one): the old and new texts can't share a spot, so the new
// one is swapped in as soon as the old words have gone, with no pause.
export function makeInlineWriter(el: HTMLElement) {
  let run = 0;
  el.innerHTML = wrapWords(el.innerHTML);
  return (html: string) => {
    if (reduceMotion()) return void (el.innerHTML = wrapWords(html));
    const r = ++run;
    // swap while the last words are finishing their fade, so the writing follows the erasing closely
    const done = fadeOut(units(el)) - OUT_FADE * 0.4;
    window.setTimeout(() => {
      if (r !== run) return;
      el.innerHTML = wrapWords(html);
      fadeIn(units(el));
    }, done);
  };
}
