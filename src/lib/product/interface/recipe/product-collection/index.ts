import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorProductRecommendationEvents } from '$stylist/product/interface/behavior/product-recommendation-events';
import type { BehaviorProductWishlistEvents } from '$stylist/product/interface/behavior/product-wishlist-events';
import type { SlotProductDescription } from '$stylist/product/interface/slot/product-description';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeProductCollection
	extends ComputeIntersectAll<
		[
			SlotTheme,
			BehaviorProductRecommendationEvents,
			BehaviorProductWishlistEvents,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	products?: SlotProductDescription[];
	items?: SlotProductDescription[];
	layout?: 'grid' | 'list';
	features?: string[];
	specifications?: Array<{ name: string; values: string[] }>;
	title?: string;
	class?: string;
}
