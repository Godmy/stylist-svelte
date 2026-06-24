import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotSortableTableHeader } from '$stylist/control/interface/slot/sortable-table-header';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeSortableTableHeader
	extends ComputeIntersectAll<
		[
			SlotSortableTableHeader,
			SlotText,
			SlotIcon,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
