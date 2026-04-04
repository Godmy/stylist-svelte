/**
 * Blockquote — цитата..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 */
import type { ChildrenProp } from '$stylist/information/type/struct/common';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BlockquoteRecipe extends ChildrenProp, ThemeAttributes<HTMLQuoteElement> {
	cite?: string;
	withBorder?: boolean;
	withBackground?: boolean;
}
