/**
 * Badge — метка статуса или категории..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IIconSlot        (information) — icon (Icon)
 *   IStatusSlot        (information) — status (Status)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ChildrenProp } from '$stylist/information/type/struct/common';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BadgeRecipe extends ChildrenProp, ThemeAttributes<HTMLSpanElement> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
}
