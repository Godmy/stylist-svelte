/**
 * PriceMatchContract — блок сравнения цен с конкурентами.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CompetitorPriceContract {
	name: string;
	price: number;
	url?: string;
}

export interface PriceMatchEventsContract {
	onFindLower?: () => void;
}

export interface PriceMatchContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, PriceMatchEventsContract {
	/** Target price */
	targetPrice?: number;
	/** List of competitor prices */
	competitorPrices: CompetitorPriceContract[];
	/** Currency symbol */
	currency?: string;
	/** Product name */
	productName?: string;
}
