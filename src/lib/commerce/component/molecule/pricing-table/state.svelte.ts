import type { HTMLAttributes } from 'svelte/elements';
import type { RecipePricingTable } from '$stylist/commerce/interface/recipe/pricing-table';

export function createPricingTableState(
	props: RecipePricingTable & HTMLAttributes<HTMLDivElement>
) {
	function getPlanCardClass(highlighted?: boolean) {
		return [
			'pricing-table__plan-card',
			highlighted ? 'pricing-table__highlighted-plan' : 'pricing-table__default-plan'
		].join(' ');
	}

	function getCtaButtonClass(highlighted?: boolean) {
		return [
			'pricing-table__cta-button',
			highlighted ? 'pricing-table__highlighted-button' : 'pricing-table__default-button'
		].join(' ');
	}

	return {
		get containerClass() {
			return ['pricing-table', props.class, props.className].filter(Boolean).join(' ');
		},
		get popularBadgeClass() {
			return 'pricing-table__popular-badge';
		},
		get planTitleClass() {
			return 'pricing-table__plan-title';
		},
		get priceContainerClass() {
			return 'pricing-table__price-container';
		},
		get priceClass() {
			return 'pricing-table__price';
		},
		get periodClass() {
			return 'pricing-table__period';
		},
		get featuresListClass() {
			return 'pricing-table__features-list';
		},
		get featureItemClass() {
			return 'pricing-table__feature-item';
		},
		get checkIconClass() {
			return 'pricing-table__check-icon';
		},
		getPlanCardClass,
		getCtaButtonClass
	};
}
