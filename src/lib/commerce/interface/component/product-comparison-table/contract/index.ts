/**
 * ProductComparisonTableContract — таблица сравнения товаров.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductComparisonTableItemContract {
	id: string;
	name: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}

export interface ProductComparisonTableContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** List of products to compare */
	products: ProductComparisonTableItemContract[];
	/** List of features to compare */
	features: string[];
}
