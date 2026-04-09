import type { TokenSize } from '$stylist/layout/type/enum/size';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

export const TAG_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'px-1 py-0.5 text-[10px]',
	sm: 'px-1.5 py-0.5 text-xs',
	md: 'px-2 py-1 text-sm',
	lg: 'px-3 py-1.5 text-base',
	xl: 'px-3.5 py-2 text-lg',
	'2xl': 'px-4 py-2.5 text-xl',
	'1/4': 'px-1 py-0.5 text-[10px]',
	'1/3': 'px-1.5 py-0.5 text-xs',
	'2/5': 'px-1.5 py-0.5 text-xs',
	'1/2': 'px-2 py-1 text-sm',
	'3/5': 'px-2 py-1 text-sm',
	'2/3': 'px-3 py-1.5 text-base',
	'3/4': 'px-3.5 py-2 text-lg',
	full: 'px-4 py-2.5 text-xl w-full'
};
