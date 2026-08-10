import type { RecipeUpsell as UpsellContract } from '$stylist/commerce/interface/recipe/upsell';
import type { SlotUpsellProduct as UpsellProductContract } from '$stylist/commerce/interface/slot/upsell-product';
export function createUpsellState(props: UpsellContract) {
	const visibleProducts = $derived((props.upsellProducts ?? []).slice(0, props.maxProducts ?? 3));

	function formatPrice(amount: number) {
		return new Intl.NumberFormat(props.locale ?? 'en-US', {
			style: 'currency',
			currency: props.currency ?? 'USD'
		}).format(amount);
	}

	function getSavings(product: UpsellProductContract) {
		if (!product.originalPrice) return 0;
		return product.originalPrice - product.price;
	}

	function getStarClasses(filled: boolean): string {
		return filled ? 'upsell__star upsell__star--filled' : 'upsell__star upsell__star--empty';
	}

	return {
		get visibleProducts() {
			return visibleProducts;
		},
		formatPrice,
		getSavings,
		getStarClasses
	};
}

export default createUpsellState;
