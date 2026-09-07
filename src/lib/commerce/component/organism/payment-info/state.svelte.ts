import type { PaymentMethod } from '$stylist/commerce/interface/slot/payment-method';
import type { RecipePaymentInfoProps } from '$stylist/commerce/interface/recipe/payment-info-props';

export function createPaymentInfoState(props: RecipePaymentInfoProps) {
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
