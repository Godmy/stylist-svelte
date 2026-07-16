import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeProductDemo
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotText, HTMLAttributes<HTMLDivElement>]> {
	demoContent: Snippet;
	features?: string[];
	onDemo?: () => void;
}
