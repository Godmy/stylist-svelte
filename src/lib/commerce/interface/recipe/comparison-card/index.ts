/**
 * ComparisonCard вЂ” РєР°СЂС‚РѕС‡РєР° СЃСЂР°РІРЅРµРЅРёСЏ..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 *   IMediaSlot        (information) вЂ” media (Media)
 *   IBadgeSlot        (information) вЂ” badge (Badge)
 *   IStatusSlot        (information) вЂ” status (Status)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ComparisonCardColumn } from '$stylist/commerce/interface/slot/comparison-card-column';

export interface ComparisonCardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IBadgeSlot,
		IStatusSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	title?: string;
	before: ComparisonCardColumn;
	after: ComparisonCardColumn;
}

