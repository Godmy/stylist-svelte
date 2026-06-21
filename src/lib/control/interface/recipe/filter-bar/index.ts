import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotFilterBar } from '$stylist/control/interface/slot/filter-bar';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeFilterBar
	extends ComputeIntersectAll<
		[
			SlotFilterBar,
			SlotChildren,
			SlotLabel,
			SlotCaption,
			BehaviorSelectable<string[]>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}