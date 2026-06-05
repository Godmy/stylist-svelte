import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenSoftwareBadge } from '$stylist/information/type/enum/software-badge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface NpmBadgeRecipe extends StructIntersectAll<[ThemeAttributes<HTMLSpanElement>]> {
	type?: TokenSoftwareBadge;
	label?: string;
	value?: string;
	link?: string;
}
