/**
 * OrderConfirmationContract — подтверждение заказа.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenOrderStatus } from '$stylist/commerce/type/enum/order-status';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';

export interface OrderItemContract {
	id: string;
	name: string;
	price: number;
	quantity: number;
	variant?: string;
	thumbnail?: string;
}

export interface ShippingAddressContract {
	firstName: string;
	lastName: string;
	address1: string;
	address2?: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

export interface OrderConfirmationPaymentInfoContract {
	method: string;
	lastFour?: string;
	status: TokenBillingItem;
}

export interface OrderConfirmationEventsContract {
	onDownloadInvoice?: () => void;
	onShareOrder?: () => void;
	onContinueShopping?: () => void;
	onTrackOrder?: () => void;
}

export interface OrderConfirmationContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, OrderConfirmationEventsContract {
	/** Order ID */
	orderId: string;
	/** Order date */
	orderDate: Date;
	/** List of order items */
	items: OrderItemContract[];
	/** Order total */
	total: number;
	/** Shipping address */
	shippingAddress: ShippingAddressContract;
	/** Payment information */
	paymentInfo: OrderConfirmationPaymentInfoContract;
	/** Estimated delivery date */
	estimatedDelivery?: Date;
	/** Tracking number */
	trackingNumber?: string;
	/** Order status */
	orderStatus?: TokenOrderStatus;
	/** Shipping cost */
	shippingCost?: number;
	/** Tax amount */
	taxAmount?: number;
	/** Currency code */
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
