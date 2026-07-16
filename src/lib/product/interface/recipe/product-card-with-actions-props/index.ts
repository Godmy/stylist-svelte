import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';

export interface ProductCardWithActionsProps extends ComputeIntersectAll<[]> {
	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	reviewCount?: number;
	description?: string;
	actions?: Snippet;
	class?: string;
}
