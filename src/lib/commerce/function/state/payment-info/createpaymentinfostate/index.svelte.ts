import { PaymentInfoStyleManager } from '$stylist/commerce/class/style-manager/payment-controls';
import type { PaymentMethod } from '$stylist/commerce/type/struct/payment-method';
import type { PaymentInfoProps } from '../paymentinfoprops';

export function createPaymentInfoState(props: PaymentInfoProps) {
	let selectedMethodId = $state(
		(props.methods ?? []).find((m: PaymentMethod) => m.enabled !== false)?.id ?? ''
	);

	const rootClass = $derived(PaymentInfoStyleManager.root(props.class ?? ''));

	return {
		get selectedMethodId() { return selectedMethodId; },
		get rootClass() { return rootClass; },
		handleMethodSelect(method: PaymentMethod) {
			if (method.disabled) return;
			selectedMethodId = method.id;
			props.onMethodSelect?.(method);
		}
	};
}

export default createPaymentInfoState;
