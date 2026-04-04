import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type ListItemMarkerType = 'bullet' | 'number' | 'icon';

export interface ListItemMarkerRecipe extends ThemeAttributes<HTMLSpanElement> {
	type?: ListItemMarkerType;
	value?: string | number;
	color?: TokenAppearance;
	size?: TokenSize;
}
