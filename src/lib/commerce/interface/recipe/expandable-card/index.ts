/**
 * ExpandableCard — раскрываемая карточка..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IMediaSlot        (information) — media (Media)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IMediaSlot } from '$stylist/information/interface/proto/media-slot';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ExpandableCardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
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
