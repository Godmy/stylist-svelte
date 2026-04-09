import type { Snippet } from 'svelte';

export interface SkeletonSpecificProps {
	type?: 'skeleton' | 'circle' | 'rectangle' | 'text' | 'table';
	width?: string | number;
	height?: string | number;
	lines?: number;
	animated?: boolean;
	children?: Snippet;
}
