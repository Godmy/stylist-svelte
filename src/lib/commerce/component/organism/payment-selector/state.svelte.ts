import type { RecipePaymentSelector } from '$stylist/commerce/interface/recipe/payment-selector';

export function createPaymentSelectorState(props: RecipePaymentSelector) {
	let selectedMethodId = $state(props.selectedMethod);

	return {
		get selectedMethodId() {
			return selectedMethodId;
		},
		select(id: string) {
			selectedMethodId = id;
			props.onSelect?.(id);
		}
	};
}

export default createPaymentSelectorState;
