import type { SlotTagInput as Slot } from '$stylist/input/interface/slot/tag-input';
import type { SlotTagInput as SlotTagInput } from '$stylist/input/interface/slot/tag-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/control/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeTagInput
	extends ComputeIntersectAll<
		[Slot, SlotTagInput, ILabelSlot, ICaptionSlot, ISelectable<string[]>, IFocusable, ISizable]
	> {}
