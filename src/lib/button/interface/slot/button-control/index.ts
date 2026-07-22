import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { SlotButtonAttributesBase } from '$stylist/button/interface/slot/button-attributes-base';

export interface SlotButtonControl extends SlotButtonAttributesBase {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	loading?: boolean;
	block?: boolean;
	onClick?: () => void;
}
