/**
 * OrderHistoryContract вЂ” РёСЃС‚РѕСЂРёСЏ Р·Р°РєР°Р·РѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotOrder } from '$stylist/commerce/interface/slot/order';
import type { BehaviorOrderHistoryEvents } from '$stylist/commerce/interface/behavior/order-history-events';

export interface RecipeOrderHistory extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorOrderHistoryEvents {
	/** List of orders */
	orders: SlotOrder[];
	/** Items per page */
	itemsPerPage?: number;
	/** Current page */
	currentPage?: number;
	/** SlotCurrency code */
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
