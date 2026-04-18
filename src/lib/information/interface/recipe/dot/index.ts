import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * Dot — точка-индикатор..
 *
 * LEGO-состав:
 *   IStatusSlot        (information) — status (Status)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface DotRecipe extends StructIntersectAll<[ThemeAttributes<HTMLSpanElement>]> {
	color?: TokenAppearance;
	size?: TokenSize;
}
