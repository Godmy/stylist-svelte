/**
 * PriceFilterContract — фильтр по диапазону цен.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface PriceFilterContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** Minimum price value */
	minPrice?: number;
	/** Maximum price value */
	maxPrice?: number;
	/** Current minimum selected */
	currentMin?: number;
	/** Current maximum selected */
	currentMax?: number;
	/** Currency symbol */
	currency?: string;
	/** Price change callback */
	onPriceChange?: (min: number, max: number) => void;
}
