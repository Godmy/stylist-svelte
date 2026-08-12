import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
export interface RecipeHeading
	extends ComputeIntersectAll<
		[SlotTheme, SlotTypography, SlotChildren, SlotText]
	> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	tone?: TokenColorTone;
	disabled?: boolean;
	block?: boolean;
}
