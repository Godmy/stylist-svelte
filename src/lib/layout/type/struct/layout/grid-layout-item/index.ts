import type { Snippet } from 'svelte';

export type GridLayoutItem = {
	class?: string;
	colSpan?: number;
	rowSpan?: number;
	content: string | Snippet;
};
