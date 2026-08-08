import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotImage as IMediaSlot } from '$stylist/image/interface/slot/image';
import type { Snippet } from 'svelte';

export interface RecipeExpandableCard
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, ICaptionSlot, IMediaSlot, IBadgeSlot]> {
	title?: string;
	subtitle?: string;
	summary?: Snippet;
	details?: Snippet;
	defaultExpanded?: boolean;
	disabled?: boolean;
	variant?: 'default' | 'minimal' | 'outline' | 'filled';
	headerClass?: string;
	summaryClass?: string;
	detailsClass?: string;
	chevronClass?: string;
}
