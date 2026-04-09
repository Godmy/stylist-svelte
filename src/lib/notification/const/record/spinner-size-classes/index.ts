import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const SPINNER_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-8 h-8',
	'2xl': 'w-10 h-10',
	'1/4': 'w-3 h-3',
	'1/3': 'w-4 h-4',
	'2/5': 'w-4 h-4',
	'1/2': 'w-5 h-5',
	'3/5': 'w-5 h-5',
	'2/3': 'w-6 h-6',
	'3/4': 'w-8 h-8',
	full: 'w-10 h-10'
};
