export const TOKEN_APPEARANCE = [
	'default',
	'primary',
	'secondary',
	'success',
	'warning',
	'danger',
	'error',
	'info',
	'solid',
	'outline',
	'ghost',
	'link',
	'subtle',
	'neutral',
	'gray',
	'dark',
	'light',
	'elevated',
	'flat'
] as const;

export type TokenAppearance = (typeof TOKEN_APPEARANCE)[number];
