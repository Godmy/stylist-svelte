import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenTypographyTone } from '$stylist/typography/type/alias/tone';
import type { StructRichTextMark } from '$stylist/typography/type/struct/rich-text-mark';

export interface RecipeRichText
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLElement>, BehaviorTypography]> {
	text: string;
	tone?: TokenTypographyTone;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
	marks?: StructRichTextMark[];
}
