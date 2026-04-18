import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface ProductCardCompactProps extends StructIntersectAll<[]> {	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	badge?: string;
	class?: string;
}