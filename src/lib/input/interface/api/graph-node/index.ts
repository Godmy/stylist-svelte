import type { Snippet } from 'svelte';

export interface IGraphNode {
	id: string;
	x: number;
	y: number;
	label?: string;
	children?: Snippet;
}
