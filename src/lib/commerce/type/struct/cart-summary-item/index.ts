export type CartSummaryItem = {
	id: string;
	name: string;
	price: number;
	quantity: number;
	originalPrice?: number;
	discountPercent?: number;
	thumbnail?: string;
	inStock?: boolean;
	maxQuantity?: number;
}
