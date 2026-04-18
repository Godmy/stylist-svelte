/**
 * AccessibilityCheckbox вЂ” С‡РµРєР±РѕРєСЃ РґРѕСЃС‚СѓРїРЅРѕСЃС‚Рё..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   IStatusSlot        (information) вЂ” status (Status)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AccessibilityCheckboxRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IStatusSlot,
		ThemeAttributes<HTMLInputElement>
	]>
{}

