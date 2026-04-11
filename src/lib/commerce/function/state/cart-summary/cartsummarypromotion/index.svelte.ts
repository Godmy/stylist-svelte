export type CartSummaryPromotion = {
	id: string;
	code: string;
	description: string;
	discountType: 'percentage' | 'fixed';
	discountValue: number;
	applied?: boolean;
}
