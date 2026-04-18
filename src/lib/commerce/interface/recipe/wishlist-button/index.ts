/**
 * WishlistButton вЂ” РєРЅРѕРїРєР° РёР·Р±СЂР°РЅРЅРѕРіРѕ..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   IIconSlot        (information) вЂ” icon (Icon)
 *   IBadgeSlot        (information) вЂ” badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface WishlistButtonRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IIconSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLButtonElement>
	]>
{
	inWishlist?: boolean;
	buttonClass?: string;
	showLabel?: boolean;
	disabled?: boolean;
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: Error) => void;
}

