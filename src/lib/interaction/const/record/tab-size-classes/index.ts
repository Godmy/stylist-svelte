import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const TAB_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'px-2 py-1 text-xs',
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-sm',
	lg: 'px-5 py-2.5 text-base',
	xl: 'px-6 py-3 text-base',
	'2xl': 'px-7 py-3.5 text-lg',
	'1/4': 'px-2 py-1 text-xs',
	'1/3': 'px-3 py-1.5 text-sm',
	'2/5': 'px-3 py-1.5 text-sm',
	'1/2': 'px-4 py-2 text-sm',
	'3/5': 'px-4 py-2 text-sm',
	'2/3': 'px-5 py-2.5 text-base',
	'3/4': 'px-6 py-3 text-base',
	full: 'px-7 py-3.5 text-lg flex-1 justify-center'
};
