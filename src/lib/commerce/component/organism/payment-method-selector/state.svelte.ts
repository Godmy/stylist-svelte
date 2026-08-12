import type { RecipePaymentMethodSelector } from '$stylist/commerce/interface/recipe/payment-method-selector';
import type { PaymentMethod } from '$stylist/commerce/interface/slot/payment-method';

export function createPaymentMethodSelectorState(props: RecipePaymentMethodSelector) {
	let selectedMethodId = $state(props.selectedMethod);

	$effect(() => {
		selectedMethodId = props.selectedMethod;
	});

	return {
		get selectedMethodId() {
			return selectedMethodId;
		},
		select(method: PaymentMethod) {
			if (props.disabled) return;
			selectedMethodId = method.id;
			props.onMethodSelect?.(method);
		}
	};
}

export default createPaymentMethodSelectorState;
