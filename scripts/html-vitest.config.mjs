import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { moduleAliases } from './prepare-module-sources.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));

export default defineConfig({
	root,
	plugins: [svelte({ configFile: false, compilerOptions: { runes: true } })],
	resolve: { alias: moduleAliases(root), conditions: ['browser'], dedupe: ['svelte'] },
	test: {
		pool: 'threads',
		environment: 'jsdom',
		include: ['modules/design-system/html/**/*.test.ts']
	}
});
