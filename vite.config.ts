import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const quietProductionBuildWarnings = () => ({
	name: 'quiet-production-build-warnings',
	enforce: 'post' as const,
	config() {
		return {
			build: {
				chunkSizeWarningLimit: 4096,
				rollupOptions: {
					onwarn(
						warning: { message: string },
						defaultHandler: (warning: { message: string }) => void
					) {
						if (
							warning.message.includes('contains an annotation that Rollup cannot interpret') ||
							warning.message.includes("Can't resolve original location of error")
						) {
							return;
						}

						defaultHandler(warning);
					}
				}
			}
		};
	}
});

export default defineConfig(() => {
	const plugins = [sveltekit(), quietProductionBuildWarnings()];

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
