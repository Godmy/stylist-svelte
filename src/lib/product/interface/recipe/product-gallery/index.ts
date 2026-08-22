import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeProductGallery extends ComputeIntersectAll<[SlotTheme]> {
	images?: string[];
	mainImage?: string;
	onImageChange?: (image: string) => void;
}
