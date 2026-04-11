import { PaymentInfoStyleManager } from '$stylist';
import type { PaymentMethodSelectorProps } from '$stylist/commerce/type/struct/payment-method-selector-props';
import type { PaymentMethod } from '$stylist/commerce/type/struct/payment-method';

export interface PaymentInfoProps extends PaymentMethodSelectorProps {
	acceptedCards?: string[];
	showMethods?: boolean;
	showSecurityInfo?: boolean;
	showAcceptedCards?: boolean;
	showFees?: boolean;
	showProcessingTime?: boolean;
}

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
