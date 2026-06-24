import type { SlotErrorMessage as Slot } from '$stylist/notification/interface/slot/error-message';
import type { SlotErrorMessage as SlotErrorMessage } from '$stylist/notification/interface/slot/error-message';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeErrorMessage
	extends ComputeIntersectAll<
		[Slot, SlotErrorMessage, ILabelSlot, ICaptionSlot, IStatusSlot, IIconSlot]
	> {}
