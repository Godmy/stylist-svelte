import type { TypographyTextProps } from '$stylist/information/type/struct/common';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { Snippet } from 'svelte';

export type ThemeCaptionRecipe = Omit<
	InformationHTMLAttributes<HTMLElement>,
	keyof TypographyTextProps
> &
	TypographyTextProps & {
		children?: Snippet;
	};
