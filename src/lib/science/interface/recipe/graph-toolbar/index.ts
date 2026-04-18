import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * GraphToolbar — тулбар графа..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphToolbarRecipe extends StructIntersectAll<[ThemeAttributes<HTMLDivElement>]> {
	label?: string;
	size?: TokenSize;
	orientation?: 'horizontal' | 'vertical';
	compact?: boolean;
	showTooltips?: boolean;
}
