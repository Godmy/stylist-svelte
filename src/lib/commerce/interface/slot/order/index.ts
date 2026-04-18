/**
 * OrderHistoryContract вЂ” РёСЃС‚РѕСЂРёСЏ Р·Р°РєР°Р·РѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotOrderItem as RecipeOrderItem } from '$stylist/commerce/interface/slot/order-item';
import type { OrderStatusType } from '$stylist/commerce/type/struct/order-status-type';

export interface SlotOrder {
	id: string;
	orderNumber: string;
	date: Date;
	status: OrderStatusType;
	total: number;
	currency?: string;
	items: RecipeOrderItem[];
	shippingAddress?: string;
	billingAddress?: string;
	paymentMethod?: string;
	trackingNumber?: string;
	estimatedDelivery?: Date;
	rating?: number;
	review?: string;
}
