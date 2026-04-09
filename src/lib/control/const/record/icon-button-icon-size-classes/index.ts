import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

export const ICON_BUTTON_ICON_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'w-3 h-3',
	sm: 'w-3.5 h-3.5',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-5.5 h-5.5',
	'2xl': 'w-6 h-6',
	'1/4': 'w-3 h-3',
	'1/3': 'w-3.5 h-3.5',
	'2/5': 'w-3.5 h-3.5',
	'1/2': 'w-4 h-4',
	'3/5': 'w-4 h-4',
	'2/3': 'w-5 h-5',
	'3/4': 'w-5.5 h-5.5',
	full: 'w-6 h-6'
};
