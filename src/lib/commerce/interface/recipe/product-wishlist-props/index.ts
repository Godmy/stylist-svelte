import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface ProductWishlistProps extends StructIntersectAll<[]> {	items: Array<{
		id: string;
		title: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	onRemove?: (id: string) => void;
	onMoveToCart?: (id: string) => void;
	class?: string;
}