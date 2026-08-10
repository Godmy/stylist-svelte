import type { CartSummaryProps } from '$stylist/commerce/interface/recipe/cart-summary-props';

export function createCartSummaryState(props: CartSummaryProps) {
	let promoCode = $state('');

	const items = $derived(props.items ?? []);
	const promotions = $derived(props.promotions ?? []);

	const subtotal = $derived(
		items.reduce((sum: number, item) => sum + item.price * item.quantity, 0)
	);
	const total = $derived(
		subtotal -
			(props.discountAmount ?? 0) +
			(props.showShipping ? (props.shippingCost ?? 0) : 0) +
			(props.showTaxes ? (props.taxCost ?? 0) : 0)
	);

	function formatPrice(amount: number) {
		return `${props.currency === 'USD' ? '$' : (props.currency ?? '$')}${amount.toFixed(2)}`;
	}

	function handleApplyPromo() {
		if (promoCode.trim()) {
			props.onApplyPromotion?.(promoCode.trim());
			promoCode = '';
		}
	}

	return {
		get items() {
			return items;
		},
		get promotions() {
			return promotions;
		},
		get promoCode() {
			return promoCode;
		},
		set promoCode(v: string) {
			promoCode = v;
		},
		get subtotal() {
			return subtotal;
		},
		get total() {
			return total;
		},
		formatPrice,
		handleApplyPromo
	};
}

export default createCartSummaryState;
