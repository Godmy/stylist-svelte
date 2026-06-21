import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotCombobox } from '$stylist/control/interface/slot/combobox';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeCombobox
	extends ComputeIntersectAll<
		[
			SlotCombobox,
			SlotChildren,
			SlotLabel,
			SlotCaption,
			SlotIcon,
			BehaviorSelectable<string>,
			BehaviorFocusable,
			BehaviorSizable,
			BehaviorScrollable
		]
	> {}