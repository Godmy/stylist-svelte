import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotFilterBar } from '$stylist/commerce/interface/slot/filter-bar';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeFilterBar
	extends ComputeIntersectAll<
		[
			SlotFilterBar,
			SlotChildren,
			SlotText,
			SlotText,
			BehaviorSelectable<string[]>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
