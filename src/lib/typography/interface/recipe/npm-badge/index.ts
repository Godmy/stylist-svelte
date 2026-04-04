import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenSoftwareBadge } from '$stylist/information/type/enum/software-badge';

export interface NpmBadgeRecipe extends ThemeAttributes<HTMLSpanElement> {
	type?: TokenSoftwareBadge;
	label?: string;
	value?: string;
	link?: string;
}
