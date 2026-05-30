import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TypographyTextProps } from '$stylist/typography/type/struct/typography-text-props';
import type { Snippet } from 'svelte';

export interface ThemeStrongRecipe
	extends StructIntersectAll<[ThemeAttributes<HTMLElement>, TypographyTextProps]> {
	children?: Snippet;
}
