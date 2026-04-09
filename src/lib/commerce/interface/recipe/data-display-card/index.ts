/**
 * DataDisplayCard — карточка отображения данных..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IStatusSlot        (information) — status (Status)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface DataDisplayCardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IBadgeSlot,
		IStatusSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	title?: string;
	subtitle?: string;
	description?: string;
	image?: string;
	footer?: Snippet;
	actions?: Snippet;
	imageClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	actionsClass?: string;
}
