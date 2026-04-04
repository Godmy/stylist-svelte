/**
 * ProductAvailabilityContract — наличие товара.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductAvailabilityContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** Is product available */
	available?: boolean;
	/** Stock quantity */
	stock?: number;
	/** Location info */
	location?: string;
	/** Estimated restock date */
	estimatedRestock?: string;
	/** Notify me callback */
	onNotifyMe?: () => void;
}
