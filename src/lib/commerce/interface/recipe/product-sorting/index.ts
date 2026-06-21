import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotProductSorting } from '$stylist/commerce/interface/slot/product-sorting';
import type { SlotProductSortingOption } from '$stylist/commerce/interface/slot/product-sorting-option';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeProductSorting
	extends ComputeIntersectAll<
		[SlotProductSorting, SlotTheme, HTMLAttributes<HTMLDivElement>, SlotChildren]
	> {
	options: SlotProductSortingOption[];
	value: string;
	oninput?: (event: Event) => void;
	onchange?: (event: Event) => void;
}