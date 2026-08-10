import type { PaymentMethodSelectorProps } from '$stylist/commerce/type/struct/payment-method-selector-props';
import type { PaymentMethod } from '$stylist/commerce/type/struct/payment-method';

export function createPaymentMethodSelectorState(props: PaymentMethodSelectorProps) {
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
