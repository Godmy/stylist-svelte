/**
 * TableCell вЂ” СЏС‡РµР№РєР° С‚Р°Р±Р»РёС†С‹..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TableCellRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLTableCellElement>
	]>
{
	content?: Snippet;
	variant?: 'data' | 'header';
	align?: 'left' | 'center' | 'right';
}

