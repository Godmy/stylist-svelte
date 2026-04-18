/**
 * OrderHistoryContract вЂ” РёСЃС‚РѕСЂРёСЏ Р·Р°РєР°Р·РѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BehaviorOrderHistoryEvents {
	onOrderRepeat?: (orderId: string) => void;
	onWriteReview?: (orderId: string) => void;
	onDownloadInvoice?: (orderId: string) => void;
	onReturnItem?: (orderId: string, itemId: string) => void;
}
