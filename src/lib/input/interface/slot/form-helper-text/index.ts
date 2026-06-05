import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

import type { SlotInputHelper } from '$stylist/input/interface/slot/input-helper';

export interface SlotFormHelperText extends SlotInputHelper<HTMLParagraphElement> {
	text?: string;
	variant?: TokenAppearance;
}
