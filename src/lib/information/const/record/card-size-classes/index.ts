import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const CARD_SIZE_CLASSES: Partial<Record<TokenSize, string>> = {
	sm: 'p-3',
	md: 'p-4',
	lg: 'p-6',
	xl: 'p-8'
};
