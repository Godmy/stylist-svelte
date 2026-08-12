import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotImage } from '$stylist/image/interface/slot/image';
export interface RecipeLinkCard
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotImage, SlotIcon]> {
	title?: string;
	description?: string;
	href: string;
	newTab?: boolean;
	variant?: 'default' | 'subtle' | 'outline';
	icon?: string;
	showArrow?: boolean;
}
