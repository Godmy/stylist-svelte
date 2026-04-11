import type { HTMLAttributes } from 'svelte/elements';

export interface OrderItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	thumbnail?: string;
	variant?: string;
}

export interface ShippingAddress {
	firstName: string;
	lastName: string;
	address1: string;
	address2?: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

export interface PaymentInfo {
	method: string;
	lastFour?: string;
	status: 'paid' | 'pending' | 'failed';
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
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
