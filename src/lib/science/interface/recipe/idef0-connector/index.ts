/**
 * Idef0Connector вЂ” РєРѕРЅРЅРµРєС‚РѕСЂ IDEF0..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0ConnectorRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	label: string;
	direction?: 'input' | 'output';
	showArrow?: boolean;
	color?: string;
}

