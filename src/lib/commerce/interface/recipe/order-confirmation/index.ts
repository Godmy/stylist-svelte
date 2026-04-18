/**
 * OrderConfirmationContract вЂ” РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenOrderStatus } from '$stylist/commerce/type/enum/order-status';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';
import type { SlotOrderItem as RecipeOrderItem } from '$stylist/commerce/interface/slot/order-item';
import type { ContractShippingAddress } from '$stylist/commerce/interface/contract/shipping-address';
import type { SlotOrderConfirmationPaymentInfo as ContractOrderConfirmationPaymentInfo } from '$stylist/commerce/interface/slot/order-confirmation-payment-info';
import type { SlotOrderConfirmationEvents as BehaviorOrderConfirmationEvents } from '$stylist/commerce/interface/slot/order-confirmation-events';

export interface RecipeOrderConfirmation extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorOrderConfirmationEvents {
	/** SlotOrder ID */
	orderId: string;
	/** SlotOrder date */
	orderDate: Date;
	/** List of order items */
	items: RecipeOrderItem[];
	/** SlotOrder total */
	total: number;
	/** Shipping address */
	shippingAddress: ContractShippingAddress;
	/** Payment information */
	paymentInfo: ContractOrderConfirmationPaymentInfo;
	/** Estimated delivery date */
	estimatedDelivery?: Date;
	/** Tracking number */
	trackingNumber?: string;
	/** SlotOrder status */
	orderStatus?: TokenOrderStatus;
	/** Shipping cost */
	shippingCost?: number;
	/** Tax amount */
	taxAmount?: number;
	/** SlotCurrency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show download invoice button */
	showDownloadInvoice?: boolean;
	/** Show share order button */
	showShareOrder?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for summary */
	summaryClass?: string;
	/** Additional CSS class for items */
	itemClass?: string;
	/** Additional CSS class for address */
	addressClass?: string;
	/** Additional CSS class for actions */
	actionsClass?: string;
}
