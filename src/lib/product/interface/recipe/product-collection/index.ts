import type { SlotProductDescription } from '$stylist/product/interface/slot/product-description';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeProductCollection
	extends ComputeIntersectAll<[SlotTheme, SlotText, {
onRemove?: (id: string) => void;
	onMoveToCart?: (id: string) => void;
}]> {
	onProductClick?: (id: string) => void;

	products?: SlotProductDescription[];
	items?: SlotProductDescription[];
	layout?: 'grid' | 'list';
	features?: string[];
	specifications?: Array<{ name: string; values: string[] }>;
	class?: string;
}
