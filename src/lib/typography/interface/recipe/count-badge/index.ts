/**
 * CountBadge — бейдж со счётчиком..
 *
 * LEGO-состав:
 *   IBadgeSlot        (information) — badge (Badge)
 *   IStatusSlot        (information) — status (Status)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CountBadgeRecipe extends ThemeAttributes<HTMLSpanElement> {
	count?: number;
	max?: number;
	showZero?: boolean;
}
