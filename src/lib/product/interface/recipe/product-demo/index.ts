import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeProductDemo extends ComputeIntersectAll<[SlotTheme, SlotText]> {
	demoContent: Snippet;
	features?: string[];
	onDemo?: () => void;
}
