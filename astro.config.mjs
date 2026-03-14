// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://b-daman.github.io',
  base: '/kotohira-digital-townspeople/',
  vite: {
    plugins: [tailwindcss()]
  }
});
