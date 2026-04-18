import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface ProductComparisonTableProps extends StructIntersectAll<[]> {	products: Array<{
		id: string;
		name: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	specifications: Array<{ name: string; values: string[] }>;
	class?: string;
}