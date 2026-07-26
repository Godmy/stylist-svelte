import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { SlotRichText } from '$stylist/typography/interface/slot/rich-text';

export interface RecipeRichText
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLElement>, SlotTypography, SlotRichText]> {
	text: string;
	tone?: TokenColorTone;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}
