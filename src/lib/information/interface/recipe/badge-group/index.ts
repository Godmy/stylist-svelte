import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BadgeGroupItem {
	id: string | number;
	label?: string;
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	onClick?: () => void;
}

export interface BadgeGroupRecipe extends ThemeAttributes<HTMLDivElement> {
	badges?: BadgeGroupItem[];
	maxVisible?: number;
	showOverflow?: boolean;
	badgeClass?: string;
	overflowClass?: string;
}
