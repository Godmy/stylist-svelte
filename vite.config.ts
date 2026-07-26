import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
	const plugins = [sveltekit()];

	if (process.env.VITEST) {
		plugins.push(svelteTesting());
	}

	return {
		plugins,
		resolve: {
			alias: {
				'stylist-test': path.resolve(__dirname, './src/test')
			}
		},
		server: {
			port: 5174,
			strictPort: true,
			fs: {
				allow: ['./']
			},
			hmr: {
				overlay: false
			}
		},
		assetsInclude: ['**/*.vert', '**/*.frag'],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
			globals: true,
			environment: 'jsdom',
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json', 'html', 'lcov'],
				exclude: [
					'**/node_modules/**',
					'**/dist/**',
					'**/.svelte-kit/**',
					'**/coverage/**',
					'**/*.config.*',
					'**/*.spec.ts',
					'**/*.test.ts'
				]
			}
		}
	};
});
