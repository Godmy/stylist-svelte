import type { OrderConfirmationProps as Props } from '$stylist/commerce/type/struct/order-confirmation-props';
import type { OrderStatus } from '$stylist/commerce/type/struct/order-status';
import type { OrderItem } from '$stylist/commerce/type/struct/order-item';
import { OrderConfirmationStyleManager } from '$stylist/commerce/class/style-manager/order-confirmation';

const ORDER_STATUS_ICONS: Record<OrderStatus, string> = {
	pending: 'package',
	processing: 'package',
	shipped: 'truck',
	delivered: 'check-circle',
	cancelled: 'x'
};

const ORDER_STATUS_TEXT: Record<OrderStatus, string> = {
	pending: 'Pending',
	processing: 'Processing',
	shipped: 'Shipped',
	delivered: 'Delivered',
	cancelled: 'Cancelled'
};

export function createOrderConfirmationState(props: Props) {
	const orderStatusConfig = $derived({
		icon: ORDER_STATUS_ICONS[props.orderStatus ?? 'processing'],
		text: ORDER_STATUS_TEXT[props.orderStatus ?? 'processing'],
		color: OrderConfirmationStyleManager.getOrderStatusClasses(props.orderStatus ?? 'processing')
	});

	const formattedTotal = $derived(new Intl.NumberFormat(props.locale ?? 'en-US', {
		style: 'currency',
		currency: props.currency ?? 'USD'
	}).format(props.total));

	const formattedOrderDate = $derived(props.orderDate.toLocaleDateString(props.locale ?? 'en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}));

	const formattedEstimatedDelivery = $derived(props.estimatedDelivery
		? props.estimatedDelivery.toLocaleDateString(props.locale ?? 'en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
		: '');

	const subtotal = $derived(props.items.reduce((sum: number, item: OrderItem) => sum + item.price * item.quantity, 0));
	const formattedSubtotal = $derived(new Intl.NumberFormat(props.locale ?? 'en-US', {
		style: 'currency',
		currency: props.currency ?? 'USD'
	}).format(subtotal));
	const formattedShipping = $derived(new Intl.NumberFormat(props.locale ?? 'en-US', {
		style: 'currency',
		currency: props.currency ?? 'USD'
	}).format(props.shippingCost ?? 0));
	const formattedTax = $derived(new Intl.NumberFormat(props.locale ?? 'en-US', {
		style: 'currency',
		currency: props.currency ?? 'USD'
	}).format(props.taxAmount ?? 0));

	function handleDownloadInvoice(): void {
		props.onDownloadInvoice?.();
	}

	function handleShareOrder(): void {
		props.onShareOrder?.();
	}

	function handleContinueShopping(): void {
		props.onContinueShopping?.();
	}

	function handleTrackOrder(): void {
		props.onTrackOrder?.();
	}

	return {
		get orderStatusConfig() { return orderStatusConfig; },
		get formattedTotal() { return formattedTotal; },
		get formattedOrderDate() { return formattedOrderDate; },
		get formattedEstimatedDelivery() { return formattedEstimatedDelivery; },
		get formattedSubtotal() { return formattedSubtotal; },
		get formattedShipping() { return formattedShipping; },
		get formattedTax() { return formattedTax; },
		handleDownloadInvoice,
		handleShareOrder,
		handleContinueShopping,
		handleTrackOrder
	};
}

export default createOrderConfirmationState;
