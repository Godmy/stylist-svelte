import type { Snippet } from 'svelte';
export interface RecipeGridItem {
	id: string;
	content: Snippet | string;
	colSpan?: number;
	rowSpan?: number;
	class?: string;
}
