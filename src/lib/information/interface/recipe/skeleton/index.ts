
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

import type { Snippet } from 'svelte';
export interface RecipeSkeleton {
	variant?: 'text' | 'circle' | 'rectangle';
	width?: string;
	height?: string;
	lines?: number;
	animated?: boolean;
	children?: Snippet;
	class?: string;
	style?: string;
}
