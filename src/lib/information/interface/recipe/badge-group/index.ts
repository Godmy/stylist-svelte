import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BadgeGroupItem } from '$stylist/information/interface/slot/badge-group';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BadgeGroupRecipe extends StructIntersectAll<[ThemeAttributes<HTMLDivElement>]> {
	badges?: BadgeGroupItem[];
	maxVisible?: number;
	showOverflow?: boolean;
	badgeClass?: string;
	overflowClass?: string;
}
