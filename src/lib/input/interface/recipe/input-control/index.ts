/**
 * InputControl вЂ” РїРѕР»Рµ РІРІРѕРґР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 *   IIconSlot        (information) вЂ” icon (Icon)
 *   IStatusSlot        (information) вЂ” status (Status)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface InputControlRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		ThemeAttributes<HTMLInputElement>
	]>
{}

