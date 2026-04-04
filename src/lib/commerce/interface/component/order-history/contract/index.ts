/**
 * OrderHistoryContract — история заказов.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type OrderStatusType = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';

export interface OrderItemContract {
	id: string;
	name: string;
	quantity: number;
	price: number;
	thumbnail?: string;
}

export interface OrderContract {
	id: string;
	orderNumber: string;
	date: Date;
	status: OrderStatusType;
	total: number;
	currency?: string;
	items: OrderItemContract[];
	shippingAddress?: string;
	billingAddress?: string;
	paymentMethod?: string;
	trackingNumber?: string;
	estimatedDelivery?: Date;
	rating?: number;
	review?: string;
}

export interface OrderSortContract {
	field: 'date' | 'total' | 'status';
	direction: 'asc' | 'desc';
}

export interface OrderHistoryEventsContract {
	onOrderRepeat?: (orderId: string) => void;
	onWriteReview?: (orderId: string) => void;
	onDownloadInvoice?: (orderId: string) => void;
	onReturnItem?: (orderId: string, itemId: string) => void;
}

export interface OrderHistoryContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, OrderHistoryEventsContract {
	/** List of orders */
	orders: OrderContract[];
	/** Items per page */
	itemsPerPage?: number;
	/** Current page */
	currentPage?: number;
	/** Currency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show filters */
	showFilters?: boolean;
	/** Show search */
	showSearch?: boolean;
	/** Show pagination */
	showPagination?: boolean;
	/** Show status badges */
	showStatusBadges?: boolean;
	/** Show order thumbnails */
	showThumbnails?: boolean;
	/** Show order totals */
	showTotals?: boolean;
	/** Show order dates */
	showDates?: boolean;
	/** Show repeat order button */
	showRepeatOrder?: boolean;
	/** Show write review button */
	showWriteReview?: boolean;
	/** Show download invoice button */
	showDownloadInvoice?: boolean;
	/** Show return item button */
	showReturnItem?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for order list */
	orderListClass?: string;
	/** Additional CSS class for order item */
	orderItemClass?: string;
	/** Additional CSS class for pagination */
	paginationClass?: string;
}
