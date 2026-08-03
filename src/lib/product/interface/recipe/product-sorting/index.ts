import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotProductSorting } from '$stylist/product/interface/slot/product-sorting';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeProductSorting
	extends ComputeIntersectAll<[SlotProductSorting, SlotTheme, SlotChildren]> {}
