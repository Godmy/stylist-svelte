import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿import type { Snippet } from 'svelte';

export interface SkeletonSpecificProps extends StructIntersectAll<[]> {
	type?: 'skeleton' | 'circle' | 'rectangle' | 'text' | 'table';
	width?: string | number;
	height?: string | number;
	lines?: number;
	animated?: boolean;
	children?: Snippet;
}
