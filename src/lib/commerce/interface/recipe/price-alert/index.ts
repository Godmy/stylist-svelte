/**
 * PriceAlertContract � ���������� �� ��������� ����.
 *
 * LEGO-������:
 *   ISizable          (architecture) � size (������ ����������)
 *   IClickable        (interaction)  � disabled, loading
 *   ThemeAttributes   (theme)        � class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipePriceAlert extends StructIntersectAll<[ BehaviorSizable, BehaviorClickable, ThemeAttributes<HTMLDivElement> ]> {
	/** Current price */
	currentPrice?: number;
	/** Target price */
	targetPrice?: number;
	/** SlotCurrency symbol */
	currency?: string;
	/** Alert status (analytics monitoring type) */
	status?: TokenMonitoringType;
	/** Product name */
	productName?: string;
	/** Visual variant (analytics monitoring type) */
	variant?: TokenMonitoringType;
	/** Callback when status changes */
	onStatusChange?: (status: TokenMonitoringType) => void;
}
