import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeAtomicPrinciples
	extends ComputeIntersectAll<
		[SlotTheme, SlotText, SlotText, SlotBadge, HTMLAttributes<HTMLDivElement>]
	> {
	stats?: { atoms: number; molecules: number; organisms: number };
	badgeText?: string;
}
