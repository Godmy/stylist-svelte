import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const PROGRESS_BAR_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-1 rounded-sm',
	sm: 'h-2 rounded-md',
	md: 'h-3 rounded-md',
	lg: 'h-4 rounded-lg',
	xl: 'h-5 rounded-lg',
	'2xl': 'h-6 rounded-xl',
	'1/4': 'h-1 rounded-sm',
	'1/3': 'h-2 rounded-md',
	'2/5': 'h-2 rounded-md',
	'1/2': 'h-3 rounded-md',
	'3/5': 'h-3 rounded-md',
	'2/3': 'h-4 rounded-lg',
	'3/4': 'h-5 rounded-lg',
	full: 'h-6 rounded-xl'
};
