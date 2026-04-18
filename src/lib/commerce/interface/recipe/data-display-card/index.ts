/**
 * DataDisplayCard вЂ” РєР°СЂС‚РѕС‡РєР° РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РґР°РЅРЅС‹С…..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 *   IBadgeSlot        (information) вЂ” badge (Badge)
 *   IStatusSlot        (information) вЂ” status (Status)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface DataDisplayCardRecipe
	extends StructIntersectAll<[
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

