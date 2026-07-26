import type { Snippet } from 'svelte';

export interface SlotGridItem {
	id: string;
	content: Snippet | string;
	colSpan?: number;
	rowSpan?: number;
	class?: string;
}
