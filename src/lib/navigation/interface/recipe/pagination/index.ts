import type { SlotPagination as PaginationProps } from '$stylist/navigation/interface/slot/pagination';
import type { SlotPagination as Slot } from '$stylist/navigation/interface/slot/pagination';
import type { SlotPagination as SlotPagination } from '$stylist/navigation/interface/slot/pagination';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

import type { HTMLAttributes } from 'svelte/elements';
import type { SlotPagination as BasePaginationProps } from '$stylist/navigation/interface/slot/pagination';

export interface RecipePagination
	extends ComputeIntersectAll<
		[
			BasePaginationProps,
			HTMLAttributes<HTMLDivElement>,
			ComputeIntersectAll<[PaginationProps, Omit<HTMLAttributes<HTMLDivElement>, 'class'>]> & {
class?: string;
},
			Slot,
			SlotPagination,
			ILabelSlot,
			IIconSlot,
			IClickable,
			IFocusable,
			ISizable
		]
	> {}
