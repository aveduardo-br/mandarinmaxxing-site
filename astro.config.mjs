// @ts-check
import { defineConfig } from 'astro/config';

// Static one-page site. Vercel builds it with the Astro preset (output: dist/).
export default defineConfig({
  output: 'static',
});
