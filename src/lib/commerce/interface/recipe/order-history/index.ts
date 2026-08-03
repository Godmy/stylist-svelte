import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotOrder } from '$stylist/commerce/interface/slot/order';
import type { BehaviorOrderHistoryEvents } from '$stylist/commerce/interface/behavior/order-history-events';

export interface RecipeOrderHistory
	extends ComputeIntersectAll<[SlotTheme]>,
		BehaviorOrderHistoryEvents {
	orders: SlotOrder[];

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
