/**
 * ProductGalleryContract — галерея изображений товара.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductImageContract {
	src: string;
	alt?: string;
}

export interface ProductGalleryContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** List of image URLs */
	images: string[];
	/** Main image URL */
	mainImage?: string;
	/** Callback when image changes */
	onImageChange?: (image: string) => void;
}
