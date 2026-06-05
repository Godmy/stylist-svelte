/**
 * WishlistButton — кнопка избранного..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IIconSlot        (information) — icon (Icon)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface WishlistButtonRecipe
	extends StructIntersectAll<
		[ILabelSlot, IIconSlot, IBadgeSlot, ThemeAttributes<HTMLButtonElement>]
	> {
	inWishlist?: boolean;
	buttonClass?: string;
	showLabel?: boolean;
	disabled?: boolean;
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: Error) => void;
}
