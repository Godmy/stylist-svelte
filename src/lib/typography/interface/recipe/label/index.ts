import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * Label — текстовая метка..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface LabelRecipe extends StructIntersectAll<[ChildrenProp, ThemeAttributes<HTMLLabelElement>]> {
	size?: TokenSize;
	required?: boolean;
	disabled?: boolean;
	htmlFor?: string;
	text?: string;
	label?: string;
}
