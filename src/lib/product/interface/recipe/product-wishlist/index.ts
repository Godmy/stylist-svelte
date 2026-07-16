import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotWishlistItem } from '$stylist/product/interface/slot/wishlist-item';
import type { BehaviorProductWishlistEvents } from '$stylist/product/interface/behavior/product-wishlist-events';

export interface RecipeProductWishlist
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]>,
		BehaviorProductWishlistEvents {
	items: SlotWishlistItem[];
}
