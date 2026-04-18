import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CartSummaryItem } from '$stylist/commerce/type/struct/cart-summary-item';
import type { CartSummaryPromotion } from '$stylist/commerce/type/struct/cart-summary-promotion';

export interface CartSummaryProps extends StructIntersectAll<[]> {	items?: CartSummaryItem[];
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
