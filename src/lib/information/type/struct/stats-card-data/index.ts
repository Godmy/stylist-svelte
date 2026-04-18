import type { StatsCardTrend } from '$stylist/information/type/struct/stats-card';
import type { Snippet } from 'svelte';


/** Raw compact stats card payload. UI contract lives in interface/recipe. */
export type StatsCardData = {
	label: string;
	value: string;
	trend?: StatsCardTrend;
	trendValue?: string;
	description?: string;
	icon?: Snippet;
};
