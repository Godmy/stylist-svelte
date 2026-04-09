import type { TokenSize } from '$stylist/layout/type/enum/size';

export const PAGINATION_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-7 min-w-7 text-xs',
	sm: 'h-8 min-w-8 text-sm',
	md: 'h-9 min-w-9 text-sm',
	lg: 'h-11 min-w-11 text-base',
	xl: 'h-12 min-w-12 text-base',
	'2xl': 'h-14 min-w-14 text-lg',
	'1/4': 'h-7 min-w-7 text-xs',
	'1/3': 'h-8 min-w-8 text-sm',
	'2/5': 'h-8 min-w-8 text-sm',
	'1/2': 'h-9 min-w-9 text-sm',
	'3/5': 'h-9 min-w-9 text-sm',
	'2/3': 'h-11 min-w-11 text-base',
	'3/4': 'h-12 min-w-12 text-base',
	full: 'h-14 min-w-14 text-lg'
};
