import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotImage } from '$stylist/image/interface/slot/image';
import type { Snippet } from 'svelte';
export interface RecipeExpandableCard
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotImage, SlotBadge]> {
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
