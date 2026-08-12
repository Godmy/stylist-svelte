import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotImage } from '$stylist/image/interface/slot/image';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
export interface RecipeCategoryCard
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotImage, SlotStatus]> {
	title?: string;
	icon?: string;
	count?: number;
	description?: string;
	link?: string;
	examples?: string[];
}
