// Orange ramp, weakest to strongest (palette A4, docs/ladrilhos.md). Step 4 is the accent.
// Things that count up (HSK 1→6, words a lesson 3→7, side nav and section numbers 1→6) light up
// along it, so the orange gets stronger as the number grows.
export const RAMP = ['#F6D2BC', '#EFAE88', '#E88C5C', '#DF6E3B', '#CC5727', '#B0461C'];
export const rampAt = (n: number) => RAMP[Math.max(0, Math.min(RAMP.length - 1, n - 1))];
