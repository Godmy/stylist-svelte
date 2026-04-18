/**
 * IconCircle вЂ” РёРєРѕРЅРєР° РєСЂСѓРіР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IIconSlot        (information) вЂ” icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface IconCircleRecipe
	extends StructIntersectAll<[
		IIconSlot,
		ThemeAttributes<SVGSVGElement>
	]>
{}

