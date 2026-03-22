export const TOKEN_CODE_LANGUAGE = [
	'javascript',
	'typescript',
	'html',
	'css',
	'svelte',
	'json',
	'markdown',
	'python',
	'java',
	'csharp',
	'cpp',
	'go',
	'rust',
	'sql',
	'yaml',
	'xml'
] as const;

export type TokenCodeLanguage = (typeof TOKEN_CODE_LANGUAGE)[number];
