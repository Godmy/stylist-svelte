/**
 * ExpandableCard — раскрываемая карточка..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IMediaSlot        (information) — media (Media)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ExpandableCardRecipe
	extends StructIntersectAll<
		[ILabelSlot, ICaptionSlot, IMediaSlot, IBadgeSlot, ThemeAttributes<HTMLDivElement>]
	> {
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
