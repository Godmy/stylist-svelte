import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

export const PADDING_SIZES: Record<TokenSize, string> = {
	xs: 'px-2 py-1',
	sm: 'px-3 py-1.5',
	md: 'px-4 py-2',
	lg: 'px-6 py-3',
	xl: 'px-7 py-3.5',
	'2xl': 'px-8 py-4',
	'1/4': 'px-2 py-1',
	'1/3': 'px-3 py-1.5',
	'2/5': 'px-3 py-1.5',
	'1/2': 'px-4 py-2',
	'3/5': 'px-4 py-2',
	'2/3': 'px-6 py-3',
	'3/4': 'px-7 py-3.5',
	full: 'px-8 py-4'
};

export const TEXT_SIZES: Record<TokenSize, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'1/4': 'text-xs',
	'1/3': 'text-sm',
	'2/5': 'text-sm',
	'1/2': 'text-base',
	'3/5': 'text-base',
	'2/3': 'text-lg',
	'3/4': 'text-xl',
	full: 'text-2xl'
};

export const ICON_SIZES: Record<TokenSize, string> = {
	xs: 'w-2.5 h-2.5',
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-6 h-6',
	'2xl': 'w-7 h-7',
	'1/4': 'w-2.5 h-2.5',
	'1/3': 'w-3 h-3',
	'2/5': 'w-3 h-3',
	'1/2': 'w-4 h-4',
	'3/5': 'w-4 h-4',
	'2/3': 'w-5 h-5',
	'3/4': 'w-6 h-6',
	full: 'w-7 h-7'
};

export const SIZE_CLASSES: Record<TokenSize, string> = {
	xs: `${PADDING_SIZES.xs} ${TEXT_SIZES.xs}`,
	sm: `${PADDING_SIZES.sm} ${TEXT_SIZES.sm}`,
	md: `${PADDING_SIZES.md} ${TEXT_SIZES.md}`,
	lg: `${PADDING_SIZES.lg} ${TEXT_SIZES.lg}`,
	xl: `${PADDING_SIZES.xl} ${TEXT_SIZES.xl}`,
	'2xl': `${PADDING_SIZES['2xl']} ${TEXT_SIZES['2xl']}`,
	'1/4': `${PADDING_SIZES['1/4']} ${TEXT_SIZES['1/4']}`,
	'1/3': `${PADDING_SIZES['1/3']} ${TEXT_SIZES['1/3']}`,
	'2/5': `${PADDING_SIZES['2/5']} ${TEXT_SIZES['2/5']}`,
	'1/2': `${PADDING_SIZES['1/2']} ${TEXT_SIZES['1/2']}`,
	'3/5': `${PADDING_SIZES['3/5']} ${TEXT_SIZES['3/5']}`,
	'2/3': `${PADDING_SIZES['2/3']} ${TEXT_SIZES['2/3']}`,
	'3/4': `${PADDING_SIZES['3/4']} ${TEXT_SIZES['3/4']}`,
	full: `${PADDING_SIZES.full} ${TEXT_SIZES.full}`
};



