import type { UpsellContract, UpsellProductContract } from '$stylist/commerce/interface/component/upsell';
import { UpsellStyleManager } from '$stylist/commerce/class/style-manager/upsell';

export function createUpsellState(props: UpsellContract) {
	const visibleProducts = $derived(
		(props.upsellProducts ?? []).slice(0, props.maxProducts ?? 3)
	);

	const containerClasses = $derived(UpsellStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(UpsellStyleManager.getHeaderClasses(props.headerClass ?? ''));
	const titleClasses = $derived(UpsellStyleManager.getTitleClasses());
	const descriptionClasses = $derived(UpsellStyleManager.getDescriptionClasses());
	const productsContainerClasses = $derived(UpsellStyleManager.getProductsContainerClasses());
	const productCardClasses = $derived(UpsellStyleManager.getProductCardClasses());
	const productImageClasses = $derived(UpsellStyleManager.getProductImageClasses());
	const productTitleClasses = $derived(UpsellStyleManager.getProductTitleClasses());
	const productPriceClasses = $derived(UpsellStyleManager.getProductPriceClasses());
	const productOriginalPriceClasses = $derived(UpsellStyleManager.getProductOriginalPriceClasses());
	const discountBadgeClasses = $derived(UpsellStyleManager.getDiscountBadgeClasses());
	const ratingClasses = $derived(UpsellStyleManager.getRatingClasses());
	const actionsContainerClasses = $derived(UpsellStyleManager.getActionsContainerClasses());
	const recommendedBadgeClasses = $derived(UpsellStyleManager.getRecommendedBadgeClasses());
	const savingsContainerClasses = $derived(UpsellStyleManager.getSavingsContainerClasses());
	const savingsTextClasses = $derived(UpsellStyleManager.getSavingsTextClasses());
	const iconClasses = $derived(UpsellStyleManager.getIconClasses());

	function getStarClasses(filled: boolean) {
		return UpsellStyleManager.getStarClasses(filled);
	}

	function getActionButtonClasses(variant: 'primary' | 'secondary') {
		return UpsellStyleManager.getActionButtonClasses(variant);
	}

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

	return {
		get visibleProducts() { return visibleProducts; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get descriptionClasses() { return descriptionClasses; },
		get productsContainerClasses() { return productsContainerClasses; },
		get productCardClasses() { return productCardClasses; },
		get productImageClasses() { return productImageClasses; },
		get productTitleClasses() { return productTitleClasses; },
		get productPriceClasses() { return productPriceClasses; },
		get productOriginalPriceClasses() { return productOriginalPriceClasses; },
		get discountBadgeClasses() { return discountBadgeClasses; },
		get ratingClasses() { return ratingClasses; },
		get actionsContainerClasses() { return actionsContainerClasses; },
		get recommendedBadgeClasses() { return recommendedBadgeClasses; },
		get savingsContainerClasses() { return savingsContainerClasses; },
		get savingsTextClasses() { return savingsTextClasses; },
		get iconClasses() { return iconClasses; },
		getStarClasses,
		getActionButtonClasses,
		formatPrice,
		getSavings
	};
}

export default createUpsellState;
