import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	root: fileURLToPath(new URL('../', import.meta.url)),
	plugins: [svelte({ configFile: false, compilerOptions: { runes: true } })],
	resolve: { conditions: ['browser'], dedupe: ['svelte'] },
	test: {
		pool: 'threads',
		environment: 'jsdom',
		include: ['modules/design-system/html/**/*.test.ts']
	}
});
