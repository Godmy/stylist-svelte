import type { Snippet } from 'svelte';

export type GridItemContent = Snippet | string;

export interface GridItem {
	id: string;
	content: GridItemContent;
	colSpan?: number;
	rowSpan?: number;
	class?: string;
}
