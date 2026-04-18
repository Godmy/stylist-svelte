import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ProductCarouselProduct } from '$stylist/commerce/type/struct/product-carousel-product';

export interface ProductCarouselProps extends StructIntersectAll<[]> {	products?: ProductCarouselProduct[];
	class?: string;
}
