import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotSortableListItem {
	id: string;
	title: string;
	description?: string;
	content?: string;
	status?: string;
	data?: unknown;
}
