
import type { Snippet } from 'svelte';
export interface GridItem {
	id: string;
	content: Snippet | string;
	colSpan?: number;
	rowSpan?: number;
	class?: string;
}
