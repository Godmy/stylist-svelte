import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ListItemMarkerType } from '$stylist/information/type/enum/list-item-marker-type';

export interface ListItemMarkerRecipe extends StructIntersectAll<[ThemeAttributes<HTMLSpanElement>]> {
	type?: ListItemMarkerType;
	value?: string | number;
	color?: TokenAppearance;
	size?: TokenSize;
}
