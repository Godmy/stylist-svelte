import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CountBadgeRecipe extends StructIntersectAll<[ThemeAttributes<HTMLSpanElement>]> {
	count?: number;
	max?: number;
	showZero?: boolean;
}
