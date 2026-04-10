import type { ShippingInfoContract, ShippingOptionInfoContract } from '$stylist/commerce/interface/component/shipping-info';
import { ShippingInfoStyleManager } from '$stylist/commerce/class/style-manager/shipping-info';

export function createShippingInfoState(props: ShippingInfoContract) {
	let selectedOptionId = $state<string | null>(null);

	const options = $derived(props.shippingOptions ?? []);
	const regions = $derived(props.regions ?? []);

	const containerClasses = $derived(ShippingInfoStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(ShippingInfoStyleManager.getHeaderClasses());
	const titleClasses = $derived(ShippingInfoStyleManager.getTitleClasses());
	const optionsContainerClasses = $derived(ShippingInfoStyleManager.getOptionsContainerClasses());
	const optionClasses = $derived(ShippingInfoStyleManager.getOptionClasses());
	const optionNameClasses = $derived(ShippingInfoStyleManager.getOptionNameClasses());
	const optionDescriptionClasses = $derived(ShippingInfoStyleManager.getOptionDescriptionClasses());
	const optionPriceClasses = $derived(ShippingInfoStyleManager.getOptionPriceClasses());
	const deliveryTimeClasses = $derived(ShippingInfoStyleManager.getDeliveryTimeClasses());
	const regionsContainerClasses = $derived(ShippingInfoStyleManager.getRegionsContainerClasses());
	const regionItemClasses = $derived(ShippingInfoStyleManager.getRegionItemClasses());
	const regionNameClasses = $derived(ShippingInfoStyleManager.getRegionNameClasses());
	const countriesListClasses = $derived(ShippingInfoStyleManager.getCountriesListClasses());
	const shippingDetailsContainerClasses = $derived(ShippingInfoStyleManager.getShippingDetailsContainerClasses());
	const shippingDetailItemClasses = $derived(ShippingInfoStyleManager.getShippingDetailItemClasses());
	const shippingDetailLabelClasses = $derived(ShippingInfoStyleManager.getShippingDetailLabelClasses());
	const shippingDetailValueClasses = $derived(ShippingInfoStyleManager.getShippingDetailValueClasses());
	const freeShippingBadgeClasses = $derived(ShippingInfoStyleManager.getFreeShippingBadgeClasses());
	const iconClasses = $derived(ShippingInfoStyleManager.getIconClasses());
	const freeShippingProgressClasses = $derived(ShippingInfoStyleManager.getFreeShippingProgressClasses());
	const freeShippingProgressFillClasses = $derived(ShippingInfoStyleManager.getFreeShippingProgressFillClasses());

	function formatPrice(price: number) {
		if (price === 0) return 'Free';
		return `$${price.toFixed(2)}`;
	}

	function formatDelivery(days: number) {
		if (days === 1) return '1 day';
		return `${days} days`;
	}

	function handleOptionSelect(option: ShippingOptionInfoContract) {
		selectedOptionId = option.id;
	}

	return {
		get selectedOptionId() { return selectedOptionId; },
		get options() { return options; },
		get regions() { return regions; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get optionsContainerClasses() { return optionsContainerClasses; },
		get optionClasses() { return optionClasses; },
		get optionNameClasses() { return optionNameClasses; },
		get optionDescriptionClasses() { return optionDescriptionClasses; },
		get optionPriceClasses() { return optionPriceClasses; },
		get deliveryTimeClasses() { return deliveryTimeClasses; },
		get regionsContainerClasses() { return regionsContainerClasses; },
		get regionItemClasses() { return regionItemClasses; },
		get regionNameClasses() { return regionNameClasses; },
		get countriesListClasses() { return countriesListClasses; },
		get shippingDetailsContainerClasses() { return shippingDetailsContainerClasses; },
		get shippingDetailItemClasses() { return shippingDetailItemClasses; },
		get shippingDetailLabelClasses() { return shippingDetailLabelClasses; },
		get shippingDetailValueClasses() { return shippingDetailValueClasses; },
		get freeShippingBadgeClasses() { return freeShippingBadgeClasses; },
		get iconClasses() { return iconClasses; },
		get freeShippingProgressClasses() { return freeShippingProgressClasses; },
		get freeShippingProgressFillClasses() { return freeShippingProgressFillClasses; },
		formatPrice,
		formatDelivery,
		handleOptionSelect
	};
}

export default createShippingInfoState;
