import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';

export default tseslint.config(
	{ ignores: ['.svelte-kit/**', 'dist/**', 'build/**', 'static/generated/**', 'coverage/**'] },
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		files: ['**/*.svelte'],
		languageOptions: { parserOptions: { parser: tseslint.parser } }
	}
);
