import { ProductWishlistStyleManager } from '$stylist/commerce/class/style-manager/product-wishlist';

export interface ProductWishlistProps {
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

export function createProductWishlistState(props: ProductWishlistProps) {
	const containerClass = $derived(ProductWishlistStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductWishlistState;
