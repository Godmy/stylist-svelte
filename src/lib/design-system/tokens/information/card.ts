export const CARD_SIZES = ['sm', 'md', 'lg', 'xl'] as const;
export type CardSize = (typeof CARD_SIZES)[number];

export const CARD_VARIANTS = [
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
export type CardVariant = (typeof CARD_VARIANTS)[number];

export const PROGRESS_VARIANTS = ['success', 'warning', 'danger', 'info', 'secondary', 'primary'] as const;
export type ProgressVariant = (typeof PROGRESS_VARIANTS)[number];
