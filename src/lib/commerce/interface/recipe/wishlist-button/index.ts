/**
 * WishlistButton — кнопка избранного..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IIconSlot        (information) — icon (Icon)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface WishlistButtonRecipe
	extends RecordArchitectureMerge<[
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
