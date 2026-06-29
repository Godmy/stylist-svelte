import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

import type { SlotInputHelperChildren } from '$stylist/input/interface/slot/input-helper-children';

export interface SlotInputAddon extends SlotInputHelperChildren<HTMLDivElement> {
	position?: TokenAlignment;
	variant?: TokenAppearance;
}
