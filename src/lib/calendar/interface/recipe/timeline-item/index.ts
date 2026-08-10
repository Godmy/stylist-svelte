import type { SlotContent } from '$stylist/theme/interface/slot/content';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

import type { Snippet } from 'svelte';
import type { TOKEN_FLOW } from '$stylist/calendar/const/array/flow';
export interface RecipeTimelineItem extends ComputeIntersectAll<[SlotContent]> {
	id: string;
	title: string;
	date?: string;
	status?: (typeof TOKEN_FLOW)[number];
	icon?: Snippet;
}
