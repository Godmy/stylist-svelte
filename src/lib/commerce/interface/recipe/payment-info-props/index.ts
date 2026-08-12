import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PaymentMethodSelectorProps } from '$stylist/commerce/type/object/payment-method-selector-props';
export interface PaymentInfoProps extends ComputeIntersectAll<[PaymentMethodSelectorProps]> {
	acceptedCards?: string[];
	showMethods?: boolean;
	showSecurityInfo?: boolean;
	showAcceptedCards?: boolean;
	showFees?: boolean;
	showProcessingTime?: boolean;
}
