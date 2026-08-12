import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface CartSummaryProps extends ComputeIntersectAll<[]> {
	items?: {
	id: string;
	name: string;
	price: number;
	quantity: number;
	originalPrice?: number;
	discountPercent?: number;
	thumbnail?: string;
	inStock?: boolean;
	maxQuantity?: number;
}[];
	promotions?: {
	id: string;
	code: string;
	description: string;
	discountType: 'percentage' | 'fixed';
	discountValue: number;
	applied?: boolean;
}[];
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
