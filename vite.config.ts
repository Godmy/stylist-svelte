import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Разрешаем доступ к файлам корневого каталога проекта, включая package.json
			allow: ['./src', './', '../..']
		}
	},

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
});
