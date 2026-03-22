export const TOKEN_ARCHITECTURE = [
	'dot',
	'icon',
	'minimal',
	'compact',
	'detailed',
	'with-actions',
	'default'
] as const;

export type TokenArchitecture = (typeof TOKEN_ARCHITECTURE)[number];
