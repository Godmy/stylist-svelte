/**
 * ProductCatalogContract — каталог товаров.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductCatalogItemContract {
	id: string;
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
	badge?: string;
}

export interface ProductCatalogContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** List of products */
	products: ProductCatalogItemContract[];
	/** Layout type */
	layout?: 'grid' | 'list';
}
