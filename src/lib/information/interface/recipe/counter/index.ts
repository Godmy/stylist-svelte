import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CounterRecipe extends ThemeAttributes<HTMLSpanElement> {
	count?: number;
	max?: number;
	variant?: TokenAppearance;
	size?: TokenSize;
}
