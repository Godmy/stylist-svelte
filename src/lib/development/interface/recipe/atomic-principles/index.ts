import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeAtomicPrinciples
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IBadgeSlot, HTMLAttributes<HTMLDivElement>]
	> {
	stats?: { atoms: number; molecules: number; organisms: number };
	badgeText?: string;
}
