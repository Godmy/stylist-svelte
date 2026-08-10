import type { PaymentSelectorProps } from '$stylist/commerce/type/struct/payment-selector-props';

export function createPaymentSelectorState(props: PaymentSelectorProps) {
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
