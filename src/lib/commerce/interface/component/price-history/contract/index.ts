/**
 * PriceHistoryContract — график истории цен.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (заголовок графика)
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface PriceHistoryDataPointContract {
	date: string;
	price: number;
}

export interface PriceHistoryContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]> {
	/** List of price history data points */
	data: PriceHistoryDataPointContract[];
	/** Currency symbol */
	currency?: string;
}
