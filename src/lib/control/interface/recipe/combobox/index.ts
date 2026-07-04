import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotCombobox } from '$stylist/control/interface/slot/combobox';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeCombobox
	extends ComputeIntersectAll<
		[
			SlotCombobox,
			SlotChildren,
			SlotText,
			SlotText,
			SlotIcon,
			BehaviorSelectable<string>,
			BehaviorFocusable,
			BehaviorSizable,
			BehaviorScrollable
		]
	> {}
