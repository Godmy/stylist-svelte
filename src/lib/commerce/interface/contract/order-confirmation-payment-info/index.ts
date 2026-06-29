import type { TokenBillingItem } from '$stylist/commerce/type/alias/billing-item';

export interface ContractOrderConfirmationPaymentInfo {
	method: string;
	lastFour?: string;
	status: TokenBillingItem;
}
