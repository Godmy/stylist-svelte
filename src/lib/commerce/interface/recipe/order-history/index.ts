import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeOrderHistory extends ComputeIntersectAll<[SlotTheme]> {
	onOrderRepeat?: (orderId: string) => void;
	onWriteReview?: (orderId: string) => void;
	onDownloadInvoice?: (orderId: string) => void;
	onReturnItem?: (orderId: string, itemId: string) => void;

	orders: {
		id: string;
		orderNumber: string;
		date: Date;
		status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
		total: number;
		currency?: string;
		items: {
			id: string;
			name: string;
			quantity: number;
			price: number;
			thumbnail?: string;
			variant?: string;
		}[];
		shippingAddress?: string;
		billingAddress?: string;
		paymentMethod?: string;
		trackingNumber?: string;
		estimatedDelivery?: Date;
		rating?: number;
		review?: string;
	}[];

	itemsPerPage?: number;

	currentPage?: number;

	currency?: string;

	locale?: string;

	showFilters?: boolean;

	showSearch?: boolean;

	showPagination?: boolean;

	showStatusBadges?: boolean;

	showThumbnails?: boolean;

	showTotals?: boolean;

	showDates?: boolean;

	showRepeatOrder?: boolean;

	showWriteReview?: boolean;

	showDownloadInvoice?: boolean;

	showReturnItem?: boolean;

	headerClass?: string;

	orderListClass?: string;

	orderItemClass?: string;

	paginationClass?: string;
}
