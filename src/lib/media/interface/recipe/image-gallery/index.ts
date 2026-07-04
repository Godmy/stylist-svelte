import type { ImageGalleryStateProps as LegacyImageGalleryProps1 } from '$stylist/media/interface/recipe/image-gallery-image-gallery-state-props';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeImageGallery
	extends ComputeIntersectAll<[LegacyImageGalleryProps1, SlotChildren]> {
	width?: number;
	height?: number;
	src?: string;
	cropEnabled?: boolean;
	filter?: string;
	brightness?: number;
	contrast?: number;
	saturation?: number;
	hue?: number;
	class?: string;
}
