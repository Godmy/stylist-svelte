import { PaymentSelectorStyleManager } from '$stylist/commerce';
import type { PaymentSelectorProps } from '$stylist/commerce';

export function createPaymentSelectorState(props: PaymentSelectorProps) {
	let selectedMethodId = $state(props.selectedMethod);

	const rootClass = $derived(PaymentSelectorStyleManager.root(props.class ?? ''));

	return {
		get selectedMethodId() { return selectedMethodId; },
		get rootClass() { return rootClass; },
		select(id: string) {
			selectedMethodId = id;
			props.onSelect?.(id);
		}
	};
}

export default createPaymentSelectorState;
