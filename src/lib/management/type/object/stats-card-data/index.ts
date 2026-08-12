import type { TOKEN_TREND } from '$stylist/management/const/array/trend';
import type { Snippet } from 'svelte';

/** Raw compact stats card payload. UI contract lives in interface/recipe. */
export type StatsCardData = {
	label: string;
	value: string;
	trend?: (typeof TOKEN_TREND)[number];
	trendValue?: string;
	description?: string;
	icon?: Snippet;
};
