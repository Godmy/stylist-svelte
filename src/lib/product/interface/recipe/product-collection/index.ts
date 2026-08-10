
import type { BehaviorProductWishlistEvents } from '$stylist/product/interface/behavior/product-wishlist-events';
import type { SlotProductDescription } from '$stylist/product/interface/slot/product-description';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeProductCollection
	extends ComputeIntersectAll<[SlotTheme, SlotText, BehaviorProductWishlistEvents]> {
	onProductClick?: (id: string) => void;

	products?: SlotProductDescription[];
	items?: SlotProductDescription[];
	layout?: 'grid' | 'list';
	features?: string[];
	specifications?: Array<{ name: string; values: string[] }>;
	class?: string;
}
