import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';

export default tseslint.config(
	{
		ignores: [
			'.svelte-kit/**',
			'dist/**',
			'build/**',
			'static/generated/**',
			'coverage/**',
			'.wrangler/**',
			'.package-input/**'
		]
	},
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: { parserOptions: { parser: tseslint.parser } }
	},
	{
		// Legacy debt across hundreds of components: reported as warnings so CI stays a
		// gate for new errors while the backlog is paid down. `_`-prefixed names are
		// deliberate discards (rest-prop omission, unused callback parameters).
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					ignoreRestSiblings: true
				}
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-empty-object-type': 'warn',
			'svelte/require-each-key': 'warn',
			'svelte/no-useless-children-snippet': 'warn',
			'svelte/no-navigation-without-resolve': 'warn',
			'svelte/prefer-svelte-reactivity': 'warn',
			'svelte/no-at-html-tags': 'warn',
			'svelte/prefer-writable-derived': 'warn',
			// An escape such as \n inside {'...'} cannot be written as a plain attribute string.
			'svelte/no-useless-mustaches': ['error', { ignoreStringEscape: true }]
		}
	}
);
