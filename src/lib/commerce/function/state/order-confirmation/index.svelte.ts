import type { RecipeOrderConfirmation } from '$stylist/commerce/interface/recipe/order-confirmation';
import type { TokenOrderStatus } from '$stylist/commerce/type/alias/order-status';
import type { TokenBillingItem } from '$stylist/commerce/type/alias/billing-item';

const ORDER_STATUS_ICONS: Record<TokenOrderStatus, string> = {
	pending: 'package',
	processing: 'package',
	shipped: 'truck',
	delivered: 'check-circle',
	cancelled: 'x'
};

const ORDER_STATUS_TEXT: Record<TokenOrderStatus, string> = {
	pending: 'Pending',
	processing: 'Processing',
	shipped: 'Shipped',
	delivered: 'Delivered',
	cancelled: 'Cancelled'
};

export function createOrderConfirmationState(props: RecipeOrderConfirmation) {
	const status = $derived(props.orderStatus ?? 'processing');
	const subtotal = $derived(props.items.reduce((sum, item) => sum + item.price * item.quantity, 0));

	function formatCurrency(amount: number) {
		return new Intl.NumberFormat(props.locale ?? 'en-US', {
			style: 'currency',
			currency: props.currency ?? 'USD'
		}).format(amount);
	}

	function formatDate(date: Date) {
		return date.toLocaleDateString(props.locale ?? 'en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function getPaymentStatusText(paymentStatus: TokenBillingItem) {
		return paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1);
	}

	return {
		get statusIcon() {
			return ORDER_STATUS_ICONS[status];
		},
		get statusText() {
			return ORDER_STATUS_TEXT[status];
		},
		get formattedTotal() {
			return formatCurrency(props.total);
		},
		get formattedOrderDate() {
			return formatDate(props.orderDate);
		},
		get formattedEstimatedDelivery() {
			return props.estimatedDelivery ? formatDate(props.estimatedDelivery) : '';
		},
		get formattedSubtotal() {
			return formatCurrency(subtotal);
		},
		get formattedShipping() {
			return formatCurrency(props.shippingCost ?? 0);
		},
		get formattedTax() {
			return formatCurrency(props.taxAmount ?? 0);
		},
		get containerClass() {
			return ['order-confirmation', props.class].filter(Boolean).join(' ');
		},
		get successClass() {
			return 'order-confirmation__success';
		},
		get successIconWrapClass() {
			return 'order-confirmation__success-icon-wrap';
		},
		get successIconClass() {
			return 'order-confirmation__success-icon';
		},
		get headerClass() {
			return ['order-confirmation__heading', props.headerClass].filter(Boolean).join(' ');
		},
		get leadClass() {
			return 'order-confirmation__lead';
		},
		get orderIdClass() {
			return 'order-confirmation__order-id';
		},
		get bodyClass() {
			return 'order-confirmation__body';
		},
		get orderContainerClass() {
			return 'order-confirmation__order-container';
		},
		get orderHeaderClass() {
			return 'order-confirmation__order-header';
		},
		get orderHeaderRowClass() {
			return 'order-confirmation__order-header-row';
		},
		get orderTitleClass() {
			return 'order-confirmation__order-title';
		},
		get statusBadgeClass() {
			return `order-confirmation__status-badge order-confirmation__status-badge--${status}`;
		},
		get statusIconClass() {
			return 'order-confirmation__status-icon';
		},
		get mutedClass() {
			return 'order-confirmation__muted';
		},
		get contentClass() {
			return 'order-confirmation__content';
		},
		get mainGridClass() {
			return 'order-confirmation__main-grid';
		},
		get itemsSectionClass() {
			return ['order-confirmation__items', props.itemClass].filter(Boolean).join(' ');
		},
		get sectionTitleClass() {
			return 'order-confirmation__section-title';
		},
		get itemListClass() {
			return 'order-confirmation__item-list';
		},
		get itemClass() {
			return 'order-confirmation__item';
		},
		get thumbnailClass() {
			return 'order-confirmation__thumbnail';
		},
		get itemBodyClass() {
			return 'order-confirmation__item-body';
		},
		get itemRowClass() {
			return 'order-confirmation__item-row';
		},
		get itemNameClass() {
			return 'order-confirmation__item-name';
		},
		get summaryClass() {
			return ['order-confirmation__summary', props.summaryClass].filter(Boolean).join(' ');
		},
		get summaryRowsClass() {
			return 'order-confirmation__summary-rows';
		},
		get summaryRowClass() {
			return 'order-confirmation__summary-row';
		},
		get totalRowClass() {
			return 'order-confirmation__summary-row order-confirmation__summary-row--total';
		},
		get infoGridClass() {
			return 'order-confirmation__info-grid';
		},
		get infoTitleClass() {
			return 'order-confirmation__info-title';
		},
		get infoIconClass() {
			return 'order-confirmation__info-icon';
		},
		get addressClass() {
			return ['order-confirmation__address', props.addressClass].filter(Boolean).join(' ');
		},
		get infoStackClass() {
			return 'order-confirmation__info-stack';
		},
		get infoRowClass() {
			return 'order-confirmation__info-row';
		},
		get infoRowIconClass() {
			return 'order-confirmation__info-row-icon';
		},
		get infoRowBodyClass() {
			return 'order-confirmation__info-row-body';
		},
		get strongTextClass() {
			return 'order-confirmation__strong-text';
		},
		get paymentStatusBadgeClass() {
			return `order-confirmation__payment-badge order-confirmation__payment-badge--${props.paymentInfo.status}`;
		},
		get actionsClass() {
			return ['order-confirmation__actions', props.actionsClass].filter(Boolean).join(' ');
		},
		get buttonIconClass() {
			return 'order-confirmation__button-icon';
		},
		formatCurrency,
		getPaymentStatusText,
		handleDownloadInvoice() {
			props.onDownloadInvoice?.();
		},
		handleShareOrder() {
			props.onShareOrder?.();
		},
		handleContinueShopping() {
			props.onContinueShopping?.();
		},
		handleTrackOrder() {
			props.onTrackOrder?.();
		}
	};
}
