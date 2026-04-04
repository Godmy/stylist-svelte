/**
 * GraphNode — узел графа..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IStatusSlot        (information) — status (Status)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphNodeRecipe extends ThemeAttributes<HTMLDivElement> {
	x: number;
	y: number;
	size?: TokenSize;
	color?: string;
	selected?: boolean;
}
