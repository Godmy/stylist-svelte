import type { Snippet } from 'svelte';

export interface SlotGridLayoutItem {
	class?: string;
	colSpan?: number;
	rowSpan?: number;
	content: string | Snippet;
}
