import type { SlotReactionPicker as Slot } from '$stylist/input/interface/slot/reaction-picker';
import type { SlotReactionPicker as SlotReactionPicker } from '$stylist/input/interface/slot/reaction-picker';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeReactionPicker
	extends ComputeIntersectAll<
		[Slot, SlotReactionPicker, ILabelSlot, IIconSlot, ISelectable<string>, IFocusable, ISizable]
	> {}
