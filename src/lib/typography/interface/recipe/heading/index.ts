import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TokenTypographyTone } from '$stylist/theme/type/alias/tone';

export interface RecipeHeading
	extends ComputeIntersectAll<
		[SlotTheme, HTMLAttributes<HTMLHeadingElement>, SlotTypography, SlotChildren]
	> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	text?: string;
	tone?: TokenTypographyTone;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}
