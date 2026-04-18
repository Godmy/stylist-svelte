/**
 * Idef0BlackBox вЂ” С‡С‘СЂРЅС‹Р№ СЏС‰РёРє IDEF0..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0BlackBoxRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	width?: number;
	height?: number;
	boxWidth?: number;
	boxHeight?: number;
}

