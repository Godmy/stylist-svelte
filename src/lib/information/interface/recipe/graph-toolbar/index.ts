/**
 * GraphToolbar — тулбар графа..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphToolbarRecipe extends ThemeAttributes<HTMLDivElement> {
	label?: string;
	size?: TokenSize;
	orientation?: 'horizontal' | 'vertical';
	compact?: boolean;
	showTooltips?: boolean;
}
