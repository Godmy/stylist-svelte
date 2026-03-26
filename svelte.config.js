import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libRoot = path.resolve(__dirname, './src/lib');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$stylist: libRoot
		}
	}
};

export default config;
