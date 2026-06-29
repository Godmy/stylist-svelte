import type { TokenBillingItem } from '$stylist/commerce/type/alias/billing-item';

export interface ContractBillingItem {
	id: string;
	description: string;
	amount: number;
	currency: string;
	date: Date;
	status: TokenBillingItem;
}
