import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContentProp } from '$stylist/information/type/struct';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ThemeColorSwatchRecipe extends StructIntersectAll<[ContentProp, ThemeAttributes<HTMLDivElement>]> {
	color?: string;
	size?: number;
}
