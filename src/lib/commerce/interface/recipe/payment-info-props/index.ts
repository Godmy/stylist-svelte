import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { PaymentMethodSelectorProps } from '$stylist/commerce/type/struct/payment-method-selector-props';

export interface PaymentInfoProps extends StructIntersectAll<[PaymentMethodSelectorProps]> {	acceptedCards?: string[];
	showMethods?: boolean;
	showSecurityInfo?: boolean;
	showAcceptedCards?: boolean;
	showFees?: boolean;
	showProcessingTime?: boolean;
}
