/**
 * SliderTick вЂ” РјРµС‚РєР° СЃР»Р°Р№РґРµСЂР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SliderTickRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{}

