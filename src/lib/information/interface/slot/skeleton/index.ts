import type { Snippet } from 'svelte';

export interface SlotSkeleton {
	variant?: 'text' | 'circle' | 'rectangle';
	width?: string;
	height?: string;
	lines?: number;
	animated?: boolean;
	children?: Snippet;
	class?: string;
	style?: string;
}
