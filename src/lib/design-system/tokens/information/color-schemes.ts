export const COLOR_SCHEMES = [
	'default',
	'warm',
	'cool',
	'neutral',
	'blue',
	'red',
	'green',
	'purple'
] as const;
export type ColorScheme = (typeof COLOR_SCHEMES)[number];