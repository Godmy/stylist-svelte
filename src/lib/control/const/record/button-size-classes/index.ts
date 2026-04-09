import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

export const BUTTON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-6 px-2 text-xs rounded',
	sm: 'h-8 px-3 text-sm rounded-md',
	md: 'h-9 px-4 text-sm rounded-md',
	lg: 'h-11 px-6 text-base rounded-lg',
	xl: 'h-12 px-7 text-lg rounded-xl',
	'2xl': 'h-14 px-8 text-xl rounded-xl',
	'1/4': 'h-6 px-2 text-xs rounded',
	'1/3': 'h-8 px-3 text-sm rounded-md',
	'2/5': 'h-8 px-3 text-sm rounded-md',
	'1/2': 'h-9 px-4 text-sm rounded-md',
	'3/5': 'h-9 px-4 text-sm rounded-md',
	'2/3': 'h-11 px-6 text-base rounded-lg',
	'3/4': 'h-12 px-7 text-lg rounded-xl',
	full: 'h-14 px-8 text-xl rounded-xl w-full'
};
