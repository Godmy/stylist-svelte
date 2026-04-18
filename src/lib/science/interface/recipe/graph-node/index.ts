import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * SlotGraphNode — узел графа..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IStatusSlot        (information) — status (Status)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphNodeRecipe extends StructIntersectAll<[ThemeAttributes<HTMLDivElement>]> {
	id: string;
	x: number;
	y: number;
	label?: string;
	type?: string;
	interactive?: boolean;
	size?: TokenSize;
	color?: string;
	selected?: boolean;
}
