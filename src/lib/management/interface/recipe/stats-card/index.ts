import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { Snippet } from 'svelte';
import type { TOKEN_TREND } from '$stylist/management/const/array/trend';

export interface RecipeStatsCard
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLDivElement>]
	> {
	value: string;
	trend?: (typeof TOKEN_TREND)[number];
	trendValue?: string;
	icon?: Snippet;
}
