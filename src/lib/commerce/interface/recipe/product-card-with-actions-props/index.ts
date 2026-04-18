import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';

export interface ProductCardWithActionsProps extends StructIntersectAll<[]> {	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	reviewCount?: number;
	description?: string;
	actions?: Snippet;
	class?: string;
}
