import type { CartSummaryProps } from '$stylist/commerce/interface/recipe/cart-summary-props';
import { CartSummaryStyleManager } from '$stylist/commerce/class/style-manager/cart-summary';

export function createCartSummaryState(props: CartSummaryProps) {
	let promoCode = $state('');

	const items = $derived(props.items ?? []);
	const promotions = $derived(props.promotions ?? []);

	const subtotal = $derived(items.reduce((sum: number, item) => sum + item.price * item.quantity, 0));
	const total = $derived(
		subtotal
		- (props.discountAmount ?? 0)
		+ (props.showShipping ? (props.shippingCost ?? 0) : 0)
		+ (props.showTaxes ? (props.taxCost ?? 0) : 0)
	);

	const containerClasses = $derived(CartSummaryStyleManager.getContainerClasses(props.class ?? ''));
	const headerClasses = $derived(CartSummaryStyleManager.getHeaderClasses());
	const titleClasses = $derived(CartSummaryStyleManager.getTitleClasses());
	const itemClasses = $derived(CartSummaryStyleManager.getItemClasses());
	const thumbnailClasses = $derived(CartSummaryStyleManager.getThumbnailClasses());
	const itemNameClasses = $derived(CartSummaryStyleManager.getItemNameClasses());
	const itemPriceClasses = $derived(CartSummaryStyleManager.getItemPriceClasses());
	const quantityControlClasses = $derived(CartSummaryStyleManager.getQuantityControlClasses());
	const quantityButtonClasses = $derived(CartSummaryStyleManager.getQuantityButtonClasses());
	const quantityInputClasses = $derived(CartSummaryStyleManager.getQuantityInputClasses());
	const removeButtonClasses = $derived(CartSummaryStyleManager.getRemoveButtonClasses());
	const summaryClasses = $derived(CartSummaryStyleManager.getSummaryClasses());
	const summaryTitleClasses = $derived(CartSummaryStyleManager.getSummaryTitleClasses());
	const summaryRowClasses = $derived(CartSummaryStyleManager.getSummaryRowClasses());
	const summaryLabelClasses = $derived(CartSummaryStyleManager.getSummaryLabelClasses());
	const summaryValueClasses = $derived(CartSummaryStyleManager.getSummaryValueClasses());
	const totalClasses = $derived(CartSummaryStyleManager.getTotalClasses());
	const promoCodeInputClasses = $derived(CartSummaryStyleManager.getPromoCodeInputClasses());
	const promoCodeButtonClasses = $derived(CartSummaryStyleManager.getPromoCodeButtonClasses());
	const discountBadgeClasses = $derived(CartSummaryStyleManager.getDiscountBadgeClasses());

	function formatPrice(amount: number) {
		return `${props.currency === 'USD' ? '$' : props.currency ?? '$'}${amount.toFixed(2)}`;
	}

	function handleApplyPromo() {
		if (promoCode.trim()) {
			props.onApplyPromotion?.(promoCode.trim());
			promoCode = '';
		}
	}

	return {
		get items() { return items; },
		get promotions() { return promotions; },
		get promoCode() { return promoCode; },
		set promoCode(v: string) { promoCode = v; },
		get subtotal() { return subtotal; },
		get total() { return total; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get itemClasses() { return itemClasses; },
		get thumbnailClasses() { return thumbnailClasses; },
		get itemNameClasses() { return itemNameClasses; },
		get itemPriceClasses() { return itemPriceClasses; },
		get quantityControlClasses() { return quantityControlClasses; },
		get quantityButtonClasses() { return quantityButtonClasses; },
		get quantityInputClasses() { return quantityInputClasses; },
		get removeButtonClasses() { return removeButtonClasses; },
		get summaryClasses() { return summaryClasses; },
		get summaryTitleClasses() { return summaryTitleClasses; },
		get summaryRowClasses() { return summaryRowClasses; },
		get summaryLabelClasses() { return summaryLabelClasses; },
		get summaryValueClasses() { return summaryValueClasses; },
		get totalClasses() { return totalClasses; },
		get promoCodeInputClasses() { return promoCodeInputClasses; },
		get promoCodeButtonClasses() { return promoCodeButtonClasses; },
		get discountBadgeClasses() { return discountBadgeClasses; },
		formatPrice,
		handleApplyPromo
	};
}

export default createCartSummaryState;
