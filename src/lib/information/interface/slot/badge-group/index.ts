import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface BadgeGroupItem {
	id: string | number;
	label?: string;
	variant?: TokenColorTone;
	size?: TokenSize;
	disabled?: boolean;
	onClick?: () => void;
}
