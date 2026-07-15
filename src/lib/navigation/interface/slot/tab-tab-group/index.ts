import type { Snippet } from 'svelte';

export interface SlotTab {
	id: string;
	title: string;
	content: Snippet;
	disabled?: boolean;
}
