import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TypographyTextProps } from '$stylist/typography/type/struct/typography-text-props';
import type { StructRichTextMark } from '$stylist/typography/type/struct/rich-text-mark';

export interface RichTextRecipe
	extends StructIntersectAll<[ThemeAttributes<HTMLElement>, TypographyTextProps]> {
	text: string;
	marks?: StructRichTextMark[];
}
