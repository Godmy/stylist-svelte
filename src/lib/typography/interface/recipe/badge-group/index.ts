import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { BadgeGroupItem } from '$stylist/typography/interface/slot/badge-group';

export interface BadgeGroupRecipe extends StructIntersectAll<[ThemeAttributes<HTMLDivElement>]> {
	badges?: BadgeGroupItem[];
	maxVisible?: number;
	showOverflow?: boolean;
	badgeClass?: string;
	overflowClass?: string;
}
