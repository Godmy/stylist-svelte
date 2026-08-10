import type { PaymentMethod } from '$stylist/commerce/type/struct/payment-method';
import type { PaymentInfoProps } from '$stylist/commerce/interface/recipe/payment-info-props';

export function createPaymentInfoState(props: PaymentInfoProps) {
	let selectedMethodId = $state(
		(props.methods ?? []).find((m: PaymentMethod) => m.enabled !== false)?.id ?? ''
	);

	return {
		get selectedMethodId() {
			return selectedMethodId;
		},
		handleMethodSelect(method: PaymentMethod) {
			if (method.disabled) return;
			selectedMethodId = method.id;
			props.onMethodSelect?.(method);
		}
	};
}

export default createPaymentInfoState;
