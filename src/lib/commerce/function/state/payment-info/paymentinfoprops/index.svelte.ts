import type { PaymentMethodSelectorProps } from '$stylist/commerce/type/struct/payment-method-selector-props';

export type PaymentInfoProps = PaymentMethodSelectorProps  & {
	acceptedCards?: string[];
	showMethods?: boolean;
	showSecurityInfo?: boolean;
	showAcceptedCards?: boolean;
	showFees?: boolean;
	showProcessingTime?: boolean;
};
