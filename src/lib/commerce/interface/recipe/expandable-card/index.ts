/**
 * ExpandableCard вЂ” СЂР°СЃРєСЂС‹РІР°РµРјР°СЏ РєР°СЂС‚РѕС‡РєР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 *   IMediaSlot        (information) вЂ” media (Media)
 *   IBadgeSlot        (information) вЂ” badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ExpandableCardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	title?: string;
	subtitle?: string;
	summary?: Snippet;
	details?: Snippet;
	defaultExpanded?: boolean;
	disabled?: boolean;
	variant?: 'default' | 'minimal' | 'outline' | 'filled';
	headerClass?: string;
	summaryClass?: string;
	detailsClass?: string;
	chevronClass?: string;
}

