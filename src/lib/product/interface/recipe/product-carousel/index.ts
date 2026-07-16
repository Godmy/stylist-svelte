import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotProductCarouselItem } from '$stylist/product/interface/slot/product-carousel-item';

export interface RecipeProductCarousel
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	products?: SlotProductCarouselItem[];
	class?: string;
}
