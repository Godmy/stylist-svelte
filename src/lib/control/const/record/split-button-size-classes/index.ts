import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

export const SPLIT_BUTTON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-6 text-xs rounded',
	sm: 'h-8 text-sm rounded-md',
	md: 'h-9 text-sm rounded-md',
	lg: 'h-11 text-base rounded-lg',
	xl: 'h-12 text-lg rounded-xl',
	'2xl': 'h-14 text-xl rounded-xl',
	'1/4': 'h-6 text-xs rounded',
	'1/3': 'h-8 text-sm rounded-md',
	'2/5': 'h-8 text-sm rounded-md',
	'1/2': 'h-9 text-sm rounded-md',
	'3/5': 'h-9 text-sm rounded-md',
	'2/3': 'h-11 text-base rounded-lg',
	'3/4': 'h-12 text-lg rounded-xl',
	full: 'h-14 text-xl rounded-xl w-full'
};
