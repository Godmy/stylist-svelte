import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface ProductRecommendationProps extends StructIntersectAll<[]> {	products: Array<{
		id: string;
		title: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	title?: string;
	onProductClick?: (id: string) => void;
	class?: string;
}