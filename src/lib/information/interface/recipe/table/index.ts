/**
 * Table вЂ” С‚Р°Р±Р»РёС†Р° РґР°РЅРЅС‹С…..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TableRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ThemeAttributes<HTMLTableElement>
	]>
{
	caption?: string;
	content?: Snippet;
	striped?: boolean;
	bordered?: boolean;
	hoverable?: boolean;
}

