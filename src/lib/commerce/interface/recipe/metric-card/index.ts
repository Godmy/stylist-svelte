/**
 * MetricCard вЂ” РєР°СЂС‚РѕС‡РєР° РјРµС‚СЂРёРєРё..
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
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface MetricCardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IBadgeSlot,
		IStatusSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{}

