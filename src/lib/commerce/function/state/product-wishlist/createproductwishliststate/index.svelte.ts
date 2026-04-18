import { ProductWishlistStyleManager } from '$stylist/commerce/class/style-manager/product-wishlist';
import type { ProductWishlistProps } from '$stylist/commerce/interface/recipe/product-wishlist-props';

export function createProductWishlistState(props: ProductWishlistProps) {
	const containerClass = $derived(ProductWishlistStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductWishlistState;
