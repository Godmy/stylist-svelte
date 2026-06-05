/**
 * DataDisplayCard — карточка отображения данных..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IStatusSlot        (information) — status (Status)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface DataDisplayCardRecipe
	extends StructIntersectAll<
		[ILabelSlot, ICaptionSlot, IBadgeSlot, IStatusSlot, ThemeAttributes<HTMLDivElement>]
	> {
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
