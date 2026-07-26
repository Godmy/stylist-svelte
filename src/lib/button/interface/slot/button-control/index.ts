import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { SlotButtonAttributesBase } from '$stylist/button/interface/slot/button-attributes-base';

export interface SlotButtonControl extends SlotButtonAttributesBase {
	variant?: TokenColorTone;
	size?: TokenSize;
	disabled?: boolean;
	loading?: boolean;
	block?: boolean;
	onClick?: () => void;
}
