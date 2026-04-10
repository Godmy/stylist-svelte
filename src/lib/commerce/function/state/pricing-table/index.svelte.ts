import { PricingTableStyleManager } from '$stylist/commerce/class/style-manager/pricing-table';

export interface PricingTablePlan {
	name: string;
	price: string;
	period: string;
	features: string[];
	cta: string;
	highlighted?: boolean;
}

export interface PricingTableProps {
	plans?: PricingTablePlan[];
	className?: string;
}

export function createPricingTableState(props: PricingTableProps) {
	const containerClass = $derived(PricingTableStyleManager.getContainerClass(props.className ?? ''));
	const popularBadgeClass = $derived(PricingTableStyleManager.getPopularBadgeClass());
	const planTitleClass = $derived(PricingTableStyleManager.getPlanTitleClass());
	const priceContainerClass = $derived(PricingTableStyleManager.getPriceContainerClass());
	const priceClass = $derived(PricingTableStyleManager.getPriceClass());
	const periodClass = $derived(PricingTableStyleManager.getPeriodClass());
	const featuresListClass = $derived(PricingTableStyleManager.getFeaturesListClass());
	const featureItemClass = $derived(PricingTableStyleManager.getFeatureItemClass());
	const checkIconClass = $derived(PricingTableStyleManager.getCheckIconClass());

	function getPlanCardClass(highlighted: boolean) {
		return PricingTableStyleManager.getPlanCardClass(
			highlighted
				? PricingTableStyleManager.getHighlightedPlanClass()
				: PricingTableStyleManager.getDefaultPlanClass()
		);
	}

	function getCtaButtonClass(highlighted: boolean) {
		return PricingTableStyleManager.getCtaButtonClass(
			highlighted
				? PricingTableStyleManager.getHighlightedButtonClass()
				: PricingTableStyleManager.getDefaultButtonClass()
		);
	}

	return {
		get containerClass() { return containerClass; },
		get popularBadgeClass() { return popularBadgeClass; },
		get planTitleClass() { return planTitleClass; },
		get priceContainerClass() { return priceContainerClass; },
		get priceClass() { return priceClass; },
		get periodClass() { return periodClass; },
		get featuresListClass() { return featuresListClass; },
		get featureItemClass() { return featureItemClass; },
		get checkIconClass() { return checkIconClass; },
		getPlanCardClass,
		getCtaButtonClass
	};
}

export default createPricingTableState;
