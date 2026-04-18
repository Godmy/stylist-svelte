import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * StatusIndicator — индикатор статуса..
 *
 * LEGO-состав:
 *   IStatusSlot        (information) — status (Status)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAvailability } from '$stylist/interaction/type/record/availability';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface StatusIndicatorRecipe extends StructIntersectAll<[ThemeAttributes<HTMLSpanElement>]> {
	status?: TokenAvailability;
	appearance?: TokenAppearance;
	label?: string;
	customColor?: string;
	size?: TokenSize;
	showLabel?: boolean;
	indicatorClass?: string;
	labelClass?: string;
}
