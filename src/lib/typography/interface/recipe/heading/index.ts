import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TypographyTextProps } from '$stylist/typography/type/struct/typography-text-props';
import type { Snippet } from 'svelte';

export interface HeadingRecipe
	extends StructIntersectAll<[ThemeAttributes<HTMLHeadingElement>, TypographyTextProps]> {
	children?: Snippet;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
