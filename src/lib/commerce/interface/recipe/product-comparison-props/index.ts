import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface ProductComparisonProps extends StructIntersectAll<[]> {	products: Array<{
		id: string;
		name: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	features: string[];
	class?: string;
}