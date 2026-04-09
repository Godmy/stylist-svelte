import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';
import type { StatsCardTrend } from '$stylist/information/type/struct/stats-card-data';

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
