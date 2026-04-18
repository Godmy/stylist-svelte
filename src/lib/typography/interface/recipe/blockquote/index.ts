import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿/**
 * Blockquote — цитата..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 */
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BlockquoteRecipe extends StructIntersectAll<[ChildrenProp, ThemeAttributes<HTMLQuoteElement>]> {
	cite?: string;
	footerPrefix?: string;
	withBorder?: boolean;
	withBackground?: boolean;
}
