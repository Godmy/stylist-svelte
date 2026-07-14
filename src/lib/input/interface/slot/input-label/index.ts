import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { SlotInputWithLabel } from '$stylist/input/interface/slot/input-with-label';

export interface SlotInputLabel extends SlotInputWithLabel {
	labelId?: string;
	size?: TokenSize;
	disabled?: boolean;
	required?: boolean;
}
