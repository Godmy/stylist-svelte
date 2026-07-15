import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTabs } from '$stylist/navigation/interface/slot/tabs';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeTabs
	extends ComputeIntersectAll<
		[SlotTabs, SlotText, SlotIcon, BehaviorSelectable<string>, BehaviorFocusable, BehaviorSizable]
	> {}
