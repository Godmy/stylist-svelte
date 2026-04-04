import type { ContentProp } from '$stylist/information/type/struct/common';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ThemeColorSwatchRecipe extends ContentProp, ThemeAttributes<HTMLDivElement> {
	color?: string;
	size?: number;
}
