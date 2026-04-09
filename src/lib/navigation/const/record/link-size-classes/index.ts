import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const LINK_SIZE_CLASSES: Record<TokenSize, string> = {
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
