import type { SlotRangeInput as Slot } from '$stylist/calendar/interface/slot/range-input';
import type { SlotRangeInput as SlotRangeInput } from '$stylist/calendar/interface/slot/range-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeRangeInput
	extends ComputeIntersectAll<
		[Slot, SlotRangeInput, ILabelSlot, ICaptionSlot, ISelectable<number>, IFocusable, ISizable]
	> {}
