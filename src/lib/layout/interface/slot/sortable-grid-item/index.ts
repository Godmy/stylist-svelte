import type { Snippet } from 'svelte';

export interface SlotSortableGridItem {
	id: string;
	title: string;
	content?: string;
	render?: Snippet;
}
