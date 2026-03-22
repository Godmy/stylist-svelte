export const TOKEN_ALIGNMENT = [
	'top',
	'top-center',
	'top-start',
	'top-end',
	'bottom',
	'bottom-center',
	'bottom-start',
	'bottom-end',
	'left',
	'left-center',
	'left-start',
	'left-end',
	'right',
	'right-center',
	'right-start',
	'right-end',
	'center',
	'justify'
] as const;

export type TokenAlignment = (typeof TOKEN_ALIGNMENT)[number];
