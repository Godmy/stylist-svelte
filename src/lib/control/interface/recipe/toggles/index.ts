import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/control/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
export interface RecipeToggles
	extends ComputeIntersectAll<
		[SlotText, SlotText, SlotStatus, BehaviorSelectable<boolean>, BehaviorFocusable, BehaviorSizable]
	> {}
