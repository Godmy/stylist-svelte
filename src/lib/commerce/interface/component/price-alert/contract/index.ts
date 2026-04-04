/**
 * PriceAlertContract — оповещение об изменении цены.
 *
 * LEGO-состав:
 *   ISizable          (architecture) — size (размер компонента)
 *   IClickable        (interaction)  — disabled, loading
 *   ThemeAttributes   (theme)        — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenMonitoringType } from '$stylist/analytics/type/enum/monitoring-type';

export interface PriceAlertContract
	extends RecordArchitectureMerge<[
		ISizable,
		IClickable,
		ThemeAttributes<HTMLDivElement>
	]> {
	/** Current price */
	currentPrice?: number;
	/** Target price */
	targetPrice?: number;
	/** Currency symbol */
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
