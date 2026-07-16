import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotProductCatalogItem } from '$stylist/product/interface/slot/product-catalog-item';

export interface RecipeProductCatalog
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	products: SlotProductCatalogItem[];
	layout?: 'grid' | 'list';
}
