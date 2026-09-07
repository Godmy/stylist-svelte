import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotProductOption } from '$stylist/product/interface/slot/product-option';
export interface RecipeProductSorting extends ComputeIntersectAll<[SlotTheme, SlotChildren]> {
	class?: string;
	options?: SlotProductOption[];
	value?: string;
	oninput?: (event: Event) => void;
	onchange?: (event: Event) => void;
}
