import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface ProductGalleryProps extends StructIntersectAll<[]> {	images?: string[];
	mainImage?: string;
	onImageChange?: (image: string) => void;
	class?: string;
}