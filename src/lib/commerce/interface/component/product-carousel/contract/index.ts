/**
 * ProductCarouselContract — карусель товаров.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductCarouselItemContract {
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}

export interface ProductCarouselContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** List of products to display */
	products: ProductCarouselItemContract[];
}
