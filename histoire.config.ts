import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';
import { fileURLToPath } from 'node:url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  plugins: [HstSvelte()],
  setupFile: './src/histoire.setup.ts',
  theme: {
    title: 'Stylist Svelte',
    logo: {
      square: './src/assets/logo.svg'
    },
    darkClass: 'dark',
    lightClass: 'light'
  },
  storyMatch: ['src/**/*.story.svelte', 'stories/**/*.story.svelte'],
  storyProps: {
    layout: 'grid'
  },
  responsivePresets: [
    {
      name: 'Mobile',
      width: 375,
      height: 667
    },
    {
      name: 'Tablet',
      width: 768,
      height: 1024
    },
    {
      name: 'Desktop',
      width: 1200,
      height: 800
    }
  ],
  vite: {
    resolve: {
      alias: {
        '@': srcDir
      }
    }
  }
});
