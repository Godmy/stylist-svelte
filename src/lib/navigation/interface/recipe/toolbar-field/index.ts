/**
 * ToolbarField вЂ” РїРѕР»Рµ С‚СѓР»Р±Р°СЂР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   IIconSlot        (information) вЂ” icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ToolbarFieldRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IIconSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{}

