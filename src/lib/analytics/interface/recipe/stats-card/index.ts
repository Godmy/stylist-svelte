import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';
import type { StatsCardTrend } from '$stylist/analytics/type/struct/stats-card';

/** StatsCard = label + caption + icon + compact stats trend. */
export interface StatsCardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]> {
	value: string;
	trend?: StatsCardTrend;
	trendValue?: string;
	icon?: Snippet;
}
