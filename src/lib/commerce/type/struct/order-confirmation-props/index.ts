import type { HTMLAttributes } from 'svelte/elements';

export type OrderConfirmationProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
	orderId: string;
	orderDate: Date;
	items: {
	id: string;
	name: string;
	price: number;
	quantity: number;
	thumbnail?: string;
	variant?: string;
}[];
	total: number;
	shippingAddress: {
	firstName: string;
	lastName: string;
	address1: string;
	address2?: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
};
	paymentInfo: {
	method: string;
	lastFour?: string;
	status: 'paid' | 'pending' | 'failed';
};
	estimatedDelivery?: Date;
	trackingNumber?: string;
	orderStatus?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
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
};
