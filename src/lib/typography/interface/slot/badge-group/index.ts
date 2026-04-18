import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface BadgeGroupItem {
	id: string | number;
	label?: string;
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	onClick?: () => void;
}
