/** Link variant tokens */
export const LINK_VARIANTS = [
	'default',
	'primary',
	'secondary',
	'success',
	'warning',
	'danger',
	'info',
	'solid',
	'outline',
	'ghost',
	'link',
	'subtle',
	'neutral',
	'gray',
	'muted',
	'dark',
	'light'
] as const;

export type LinkVariant = (typeof LINK_VARIANTS)[number];
