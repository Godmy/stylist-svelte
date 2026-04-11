export type ProductWishlistProps = {
	items: Array<{
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
