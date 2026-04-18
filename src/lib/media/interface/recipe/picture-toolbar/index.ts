/**
 * PictureToolbar вЂ” С‚СѓР»Р±Р°СЂ РґР»СЏ РёР·РѕР±СЂР°Р¶РµРЅРёР№..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface PictureToolbarRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{}

