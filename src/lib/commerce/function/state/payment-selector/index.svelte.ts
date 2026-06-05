import { PaymentSelectorStyleManager } from '$stylist/commerce/class/style-manager/payment-selector-style-manager';
import type { PaymentSelectorProps } from '$stylist/commerce/type/struct/payment-selector-props';

export function createPaymentSelectorState(props: PaymentSelectorProps) {
	let selectedMethodId = $state(props.selectedMethod);

	const rootClass = $derived(PaymentSelectorStyleManager.root(props.class ?? ''));

	return {
		get selectedMethodId() {
			return selectedMethodId;
		},
		get rootClass() {
			return rootClass;
		},
		select(id: string) {
			selectedMethodId = id;
			props.onSelect?.(id);
		}
	};
}

export default createPaymentSelectorState;
