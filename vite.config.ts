import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), svelteTesting()],
	resolve: {
		alias: {
			'stylist-test': path.resolve(__dirname, './src/test')
		}
	},
	server: {
		fs: {
			// Разрешаем доступ к файлам корневого каталога проекта, включая package.json
			allow: ['./src', './', '../..']
		}
	},
	// Явно указываем Vite обрабатывать .vert и .frag файлы как assets
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
});
