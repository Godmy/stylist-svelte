/**
 * Blockquote — цитата..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 */
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BlockquoteRecipe extends ChildrenProp, ThemeAttributes<HTMLQuoteElement> {
	cite?: string;
	footerPrefix?: string;
	withBorder?: boolean;
	withBackground?: boolean;
}
