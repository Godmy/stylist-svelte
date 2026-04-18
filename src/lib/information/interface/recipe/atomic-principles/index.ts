/**
 * AtomicPrinciples вЂ” РІРёР·СѓР°Р»РёР·Р°С†РёСЏ Р°С‚РѕРјР°СЂРЅС‹С… РїСЂРёРЅС†РёРїРѕРІ..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 *   IBadgeSlot        (information) вЂ” badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AtomicPrinciplesRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	stats?: { atoms: number; molecules: number; organisms: number };
	badgeText?: string;
}

