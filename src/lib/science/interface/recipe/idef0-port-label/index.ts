/**
 * Idef0PortLabel вЂ” РјРµС‚РєР° РїРѕСЂС‚Р° IDEF0..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0PortLabelRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{
	text: string;
	x: number;
	y: number;
	anchor?: 'start' | 'middle' | 'end';
	color?: string;
	position?: 'left' | 'right' | 'top' | 'bottom';
}

