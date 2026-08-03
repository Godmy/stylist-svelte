import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeCategoryCard
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, ICaptionSlot, IMediaSlot, IStatusSlot]> {
	title?: string;
	icon?: string;
	count?: number;
	description?: string;
	link?: string;
	examples?: string[];
}
