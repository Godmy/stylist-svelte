import type { SlotAdvancedPasswordInput as Slot } from '$stylist/input/interface/slot/advanced-password-input';
import type { SlotAdvancedPasswordInput as SlotAdvancedPasswordInput } from '$stylist/input/interface/slot/advanced-password-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeAdvancedPasswordInput
	extends ComputeIntersectAll<
		[Slot, SlotAdvancedPasswordInput, ILabelSlot, ICaptionSlot, IIconSlot, IFocusable, ISizable]
	> {}
