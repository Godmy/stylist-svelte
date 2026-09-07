import type { RecipeShippingInfo as ShippingInfoContract } from '$stylist/commerce/interface/recipe/shipping-info';
import type { SlotShippingOptionInfo as ShippingOptionInfoContract } from '$stylist/commerce/interface/slot/shipping-option-info';
export function createShippingInfoState(props: ShippingInfoContract) {
	let selectedOptionId = $state<string | null>(null);

	const options = $derived(props.shippingOptions ?? []);
	const regions = $derived(props.regions ?? []);

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
		get selectedOptionId() {
			return selectedOptionId;
		},
		get options() {
			return options;
		},
		get regions() {
			return regions;
		},
		formatPrice,
		formatDelivery,
		handleOptionSelect
	};
}

export default createShippingInfoState;
