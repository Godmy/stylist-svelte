import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotDropdownMenu } from '$stylist/navigation/interface/slot/dropdown-menu';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeDropdownMenu
	extends ComputeIntersectAll<
		[
			SlotDropdownMenu,
			SlotText,
			SlotIcon,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable,
			BehaviorScrollable
		]
	> {}
