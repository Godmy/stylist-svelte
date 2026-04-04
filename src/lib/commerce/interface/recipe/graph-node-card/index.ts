/**
 * GraphNodeCard — карточка узла графа..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IStatusSlot        (information) — status (Status)
 */
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphNodeCardRecipe extends ThemeAttributes<HTMLDivElement> {
	label?: string;
	caption?: string;
	badge?: string | number;
	status?: string;
}
