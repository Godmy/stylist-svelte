import type { TokenBillingItem } from '$stylist/commerce/type/alias/billing-item';

export interface SlotOrderConfirmationPaymentInfo {
	method: string;
	lastFour?: string;
	status: TokenBillingItem;
}
