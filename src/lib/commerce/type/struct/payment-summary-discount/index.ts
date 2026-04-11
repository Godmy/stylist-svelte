export type PaymentSummaryDiscount = {
	id: string;
	name: string;
	amount: number;
	type: 'percentage' | 'fixed';
}
