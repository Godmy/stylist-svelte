import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

export const PADDING_SIZES: Record<ComponentSize, string> = {
	xs: 'px-2 py-1',
	sm: 'px-3 py-1.5',
	md: 'px-4 py-2',
	lg: 'px-6 py-3',
	xl: 'px-7 py-3.5',
	'2xl': 'px-8 py-4'
};

export const TEXT_SIZES: Record<ComponentSize, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl'
};

export const ICON_SIZES: Record<ComponentSize, string> = {
	xs: 'w-2.5 h-2.5',
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-6 h-6',
	'2xl': 'w-7 h-7'
};

export const SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: `${PADDING_SIZES.xs} ${TEXT_SIZES.xs}`,
	sm: `${PADDING_SIZES.sm} ${TEXT_SIZES.sm}`,
	md: `${PADDING_SIZES.md} ${TEXT_SIZES.md}`,
	lg: `${PADDING_SIZES.lg} ${TEXT_SIZES.lg}`,
	xl: `${PADDING_SIZES.xl} ${TEXT_SIZES.xl}`,
	'2xl': `${PADDING_SIZES['2xl']} ${TEXT_SIZES['2xl']}`
};


