/**
 * Blockquote represents quoted content with optional cite metadata.
 *
 * Composition:
 *   ChildrenProp     quote content
 *   ThemeAttributes  host attributes
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BlockquoteRecipe
	extends StructIntersectAll<[ChildrenProp, ThemeAttributes<HTMLQuoteElement>]> {
	cite?: string;
	citeUrl?: string;
	sourceLabel?: string;
	footerPrefix?: string;
	withBorder?: boolean;
	withBackground?: boolean;
}
