import type { SlotConfirmationDialog as Slot } from '$stylist/navigation/interface/slot/confirmation-dialog';
import type { SlotConfirmationDialog as SlotConfirmationDialog } from '$stylist/navigation/interface/slot/confirmation-dialog';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeConfirmationDialog
	extends ComputeIntersectAll<
		[
			Slot,
			SlotConfirmationDialog,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IClickable,
			IFocusable,
			ISizable
		]
	> {}
