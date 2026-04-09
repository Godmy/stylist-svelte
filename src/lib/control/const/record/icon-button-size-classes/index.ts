import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

export const ICON_BUTTON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-6 h-6',
	sm: 'w-7 h-7',
	md: 'w-8 h-8',
	lg: 'w-10 h-10',
	xl: 'w-11 h-11',
	'2xl': 'w-12 h-12',
	'1/4': 'w-6 h-6',
	'1/3': 'w-7 h-7',
	'2/5': 'w-7 h-7',
	'1/2': 'w-8 h-8',
	'3/5': 'w-8 h-8',
	'2/3': 'w-10 h-10',
	'3/4': 'w-11 h-11',
	full: 'w-12 h-12'
};
