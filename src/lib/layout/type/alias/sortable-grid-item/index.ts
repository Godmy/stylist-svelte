import type { Snippet } from 'svelte';

export type SortableGridItem = {
	id: string;
	title: string;
	content?: string;
	render?: Snippet;
};
