/**
 * Idef0Outputs вЂ” РІС‹С…РѕРґС‹ IDEF0..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { Idef0Port } from '$stylist/science/type/struct/idef-zero/idef0port';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0OutputsRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	ports: Idef0Port[];
	boxY: number;
	boxHeight: number;
}

