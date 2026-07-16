import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotProductComparisonTableItem } from '$stylist/product/interface/slot/product-comparison-table-item';

export interface RecipeProductComparisonTable
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	products: SlotProductComparisonTableItem[];
	specifications: Array<{ name: string; values: string[] }>;
}
