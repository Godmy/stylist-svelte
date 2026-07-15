import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTabGroup } from '$stylist/navigation/interface/slot/tab-group';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeTabGroup
	extends ComputeIntersectAll<
		[
			SlotTabGroup,
			SlotText,
			SlotIcon,
			BehaviorSelectable<string>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
