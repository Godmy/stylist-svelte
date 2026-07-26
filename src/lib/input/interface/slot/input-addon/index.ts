import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

import type { SlotInputHelperChildren } from '$stylist/input/interface/slot/input-helper-children';

export interface SlotInputAddon extends SlotInputHelperChildren<HTMLDivElement> {
	position?: TokenAlignment;
	variant?: TokenColorTone;
}
