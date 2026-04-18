import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * PortGroup — группа портов..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { TokenRelationship } from '$stylist/architecture/type/enum/relationship';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface PortGroupRecipe extends StructIntersectAll<[ThemeAttributes<HTMLDivElement>]> {
	title?: string;
	direction?: TokenRelationship;
	portSize?: TokenSize;
	showLabels?: boolean;
	compact?: boolean;
	divider?: boolean;
}
