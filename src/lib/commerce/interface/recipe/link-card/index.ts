import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotImage as IMediaSlot } from '$stylist/image/interface/slot/image';

export interface RecipeLinkCard
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, ICaptionSlot, IMediaSlot, IIconSlot]> {
	title?: string;
	description?: string;
	href: string;
	newTab?: boolean;
	variant?: 'default' | 'subtle' | 'outline';
	icon?: string;
	showArrow?: boolean;
}
