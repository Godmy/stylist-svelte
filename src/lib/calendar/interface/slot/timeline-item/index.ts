import type { Snippet } from 'svelte';

import type { TOKEN_FLOW } from '$stylist/calendar/const/array/flow';
export interface SlotTimelineItem {
	id: string;
	title: string;
	date?: string;
	status?: (typeof TOKEN_FLOW)[number];
	icon?: Snippet;
}
