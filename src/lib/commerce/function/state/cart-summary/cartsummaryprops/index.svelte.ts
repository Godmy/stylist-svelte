export type CartSummaryProps = {
	items?: CartSummaryItem[];
	promotions?: CartSummaryPromotion[];
	shippingCost?: number;
	taxCost?: number;
	discountAmount?: number;
	showItemThumbnails?: boolean;
	showDiscounts?: boolean;
	showShipping?: boolean;
	showTaxes?: boolean;
	showPromoCode?: boolean;
	currency?: string;
	onQuantityChange?: (itemId: string, qty: number) => void;
	onItemRemove?: (itemId: string) => void;
	onApplyPromotion?: (code: string) => void;
	onCheckout?: () => void;
	class?: string;
}
