import type { Snippet } from 'svelte';

export interface SlotDropItem {
	id: string;
	name: string;
	type: string;
	size?: number;
	data?: unknown;
}
