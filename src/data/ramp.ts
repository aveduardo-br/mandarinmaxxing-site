// Orange ramp, weakest to strongest (docs/ladrilhos.md). It ends on the accent itself, never darker,
// so the black digit always reads. Used where a number counts up: the side nav (1→6) and the
// selectors of section 05 (HSK 1→6, words a lesson 3→7). Section titles on the page use the accent.
export const RAMP = ['#FCE3D3', '#F9CBAE', '#F6B289', '#F49A68', '#F28654', '#F07A42'];
export const rampAt = (n: number) => RAMP[Math.max(0, Math.min(RAMP.length - 1, n - 1))];
