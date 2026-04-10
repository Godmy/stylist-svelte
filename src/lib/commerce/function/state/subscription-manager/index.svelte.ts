import type { SubscriptionManagerContract } from '$stylist/commerce/interface/component/subscription-manager';
import { SubscriptionManagerStyleManager } from '$stylist/commerce/class/style-manager/subscription-manager';

export function createSubscriptionManagerState(props: SubscriptionManagerContract) {
	const subscription = $derived(props.subscription);

	const containerClasses = $derived(SubscriptionManagerStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(SubscriptionManagerStyleManager.getHeaderClasses(props.headerClass ?? ''));
	const titleClasses = $derived(SubscriptionManagerStyleManager.getTitleClasses());
	const subtitleClasses = $derived(SubscriptionManagerStyleManager.getSubtitleClasses());
	const planContainerClasses = $derived(SubscriptionManagerStyleManager.getPlanContainerClasses());
	const planNameClasses = $derived(SubscriptionManagerStyleManager.getPlanNameClasses());
	const planDescriptionClasses = $derived(SubscriptionManagerStyleManager.getPlanDescriptionClasses());
	const planPriceClasses = $derived(SubscriptionManagerStyleManager.getPlanPriceClasses());
	const planPricePeriodClasses = $derived(SubscriptionManagerStyleManager.getPlanPricePeriodClasses());
	const featuresListClasses = $derived(SubscriptionManagerStyleManager.getFeaturesListClasses());
	const featureItemClasses = $derived(SubscriptionManagerStyleManager.getFeatureItemClasses());
	const featureIconClasses = $derived(SubscriptionManagerStyleManager.getFeatureIconClasses());
	const featureTextClasses = $derived(SubscriptionManagerStyleManager.getFeatureTextClasses());
	const actionsContainerClasses = $derived(SubscriptionManagerStyleManager.getActionsContainerClasses());
	const billingInfoClasses = $derived(SubscriptionManagerStyleManager.getBillingInfoClasses());
	const billingInfoLabelClasses = $derived(SubscriptionManagerStyleManager.getBillingInfoLabelClasses());
	const billingInfoValueClasses = $derived(SubscriptionManagerStyleManager.getBillingInfoValueClasses());

	function getActionButtonClasses(variant: 'primary' | 'secondary' | 'danger') {
		return SubscriptionManagerStyleManager.getActionButtonClasses(variant);
	}

	function getStatusBadgeClasses(status: string) {
		return SubscriptionManagerStyleManager.getStatusBadgeClasses(status);
	}

	function formatDate(date?: Date) {
		if (!date) return '';
		return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
	}

	function formatPrice(amount: number, currency: string) {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
	}

	return {
		get subscription() { return subscription; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get subtitleClasses() { return subtitleClasses; },
		get planContainerClasses() { return planContainerClasses; },
		get planNameClasses() { return planNameClasses; },
		get planDescriptionClasses() { return planDescriptionClasses; },
		get planPriceClasses() { return planPriceClasses; },
		get planPricePeriodClasses() { return planPricePeriodClasses; },
		get featuresListClasses() { return featuresListClasses; },
		get featureItemClasses() { return featureItemClasses; },
		get featureIconClasses() { return featureIconClasses; },
		get featureTextClasses() { return featureTextClasses; },
		get actionsContainerClasses() { return actionsContainerClasses; },
		get billingInfoClasses() { return billingInfoClasses; },
		get billingInfoLabelClasses() { return billingInfoLabelClasses; },
		get billingInfoValueClasses() { return billingInfoValueClasses; },
		getActionButtonClasses,
		getStatusBadgeClasses,
		formatDate,
		formatPrice
	};
}

export default createSubscriptionManagerState;
