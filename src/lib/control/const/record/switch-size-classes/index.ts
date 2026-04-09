import type { TokenSize } from '$stylist/layout/type/enum/size';

export const SWITCH_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-7 h-3.5',
	sm: 'w-8 h-4',
	md: 'w-10 h-5',
	lg: 'w-12 h-6',
	xl: 'w-14 h-7',
	'2xl': 'w-16 h-8',
	'1/4': 'w-7 h-3.5',
	'1/3': 'w-8 h-4',
	'2/5': 'w-8 h-4',
	'1/2': 'w-10 h-5',
	'3/5': 'w-10 h-5',
	'2/3': 'w-12 h-6',
	'3/4': 'w-14 h-7',
	full: 'w-16 h-8'
};
