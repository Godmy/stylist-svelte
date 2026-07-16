import type { Snippet } from 'svelte';
import type { TierContent } from '$stylist/architecture/type/alias/tier';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeProductCard
	extends ComputeIntersectAll<
		[SlotTheme, SlotText, SlotText, SlotBadge, SlotMedia, HTMLAttributes<HTMLDivElement>]
	> {
	variant?: TierContent;
	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	reviewCount?: number;
	badge?: string;
	description?: string;
	actions?: Snippet;
}
