import type { Snippet } from 'svelte';
import type { TierContent } from '$stylist/architecture/type/alias/tier';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotImage as SlotMedia } from '$stylist/image/interface/slot/image';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotProductDescription } from '$stylist/product/interface/slot/product-description';

export interface RecipeProductCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			Partial<SlotProductDescription>,
			SlotText,
			SlotBadge,
			SlotMedia
		]
	> {
	variant?: TierContent;
	reviewCount?: number;
	class?: string;
	features?: string[];
	actions?: Snippet;
	onAddToCart?: () => void;
	onWishlist?: () => void;
}
