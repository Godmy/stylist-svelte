import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface ProductCardCompactProps extends ComputeIntersectAll<[]> {
	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	badge?: string;
	class?: string;
}
