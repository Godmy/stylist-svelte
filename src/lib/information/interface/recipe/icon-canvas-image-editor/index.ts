import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCanvasImageEditor extends ComputeIntersectAll<[SlotChildren]> {
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
