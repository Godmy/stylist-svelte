import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface SlotAlert {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	class?: string;
}
