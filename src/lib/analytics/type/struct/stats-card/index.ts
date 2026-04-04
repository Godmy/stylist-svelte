import type { Snippet } from 'svelte';

export type StatsCardTrend = 'up' | 'down' | 'neutral';

/** Raw compact stats card payload. UI contract lives in interface/recipe. */
export type StatsCardData = {
	label: string;
	value: string;
	trend?: StatsCardTrend;
	trendValue?: string;
	description?: string;
	icon?: Snippet;
};
