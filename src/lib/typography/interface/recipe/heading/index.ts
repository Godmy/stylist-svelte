import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { TypographyTextProps } from '$stylist/typography/type/struct/typography-text-props';
import type { Snippet } from 'svelte';

export interface ThemeHeadingRecipe extends StructIntersectAll<[Omit<
	InformationHTMLAttributes<HTMLElement>,
	keyof TypographyTextProps
>, TypographyTextProps]> {		children?: Snippet;
	
}
