import type { TokenBillingItem } from '$stylist/commerce/type/alias/billing-item';
import type { TokenOrderStatus } from '$stylist/commerce/type/alias/order-status';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeOrderConfirmation extends ComputeIntersectAll<[(({
onDownloadInvoice?: () => void;
	onShareOrder?: () => void;
	onContinueShopping?: () => void;
	onTrackOrder?: () => void;

	orderId: string;
	orderDate: Date;
	items: ({
id: string;
	name: string;
	price: number;
	quantity: number;
	variant?: string;
	thumbnail?: string;
})[];
	total: number;
	shippingAddress: ({
firstName: string;
	lastName: string;
	address1: string;
	address2?: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
});
	paymentInfo: ({
method: string;
	lastFour?: string;
	status: TokenBillingItem;
});
	estimatedDelivery?: Date;
	trackingNumber?: string;
	orderStatus?: TokenOrderStatus;
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
	currency?: string;
	locale?: string;
})), SlotTheme]> {}
