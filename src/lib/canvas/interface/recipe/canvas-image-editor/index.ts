import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotImage } from '$stylist/image/interface/slot/image';
export interface RecipeCanvasImageEditor
	extends ComputeIntersectAll<[SlotTheme, SlotImage]> {
	width?: number;
	height?: number;
	cropEnabled?: boolean;
	filter?:
		| 'none'
		| 'grayscale'
		| 'sepia'
		| 'invert'
		| 'blur'
		| 'brightness'
		| 'contrast'
		| 'saturate'
		| 'hue-rotate';
	cropArea?: { x: number; y: number; width: number; height: number };
	brightness?: number;
	contrast?: number;
	saturation?: number;
	hue?: number;
}
