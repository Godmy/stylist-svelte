import type { HTMLAttributes } from 'svelte/elements';
import type { OrderItem } from '../order-item';
import type { ShippingAddress } from '../shipping-address';
import type { PaymentInfo } from '../payment-info';
import type { OrderStatus } from '../order-status';

export type OrderConfirmationProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
	orderId: string;
	orderDate: Date;
	items: OrderItem[];
	total: number;
	shippingAddress: ShippingAddress;
	paymentInfo: PaymentInfo;
	estimatedDelivery?: Date;
	trackingNumber?: string;
	orderStatus?: OrderStatus;
	shippingCost?: number;
	taxAmount?: number;
	class?: string;
	headerClass?: string;
	summaryClass?: string;
	itemClass?: string;
	addressClass?: string;
	actionsClass?: string;
	showDownloadInvoice?: boolean;
	showShareOrder?: boolean;
	onDownloadInvoice?: () => void;
	onShareOrder?: () => void;
	onContinueShopping?: () => void;
	onTrackOrder?: () => void;
	currency?: string;
	locale?: string;
}
