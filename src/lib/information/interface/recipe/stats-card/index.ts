import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';
import type { StatsCardTrend } from '$stylist/information/type/struct/stats-card';

/** StatsCard = label + caption + icon + compact stats trend. */
export interface StatsCardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]> {
	value: string;
	trend?: StatsCardTrend;
	trendValue?: string;
	icon?: Snippet;
}
