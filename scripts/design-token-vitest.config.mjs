import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { moduleAliases } from './prepare-module-sources.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
export default defineConfig({
	root,
	resolve: { alias: moduleAliases(root) },
	test: {
		pool: 'threads',
		environment: 'node',
		include: ['modules/design-system/design-token/test/unit/**/*.test.ts']
	}
});
