import type { HTMLAttributes } from 'svelte/elements';
import type { TierContent } from '$stylist/architecture/type/alias/tier';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePagination
	extends ComputeIntersectAll<
		[
			HTMLAttributes<HTMLDivElement>,
			{
				currentPage: number;
				totalPages: number;
				showFirstLast?: boolean;
				showPrevNext?: boolean;
				showDots?: boolean;
				maxVisible?: number;
				variant?: TierContent;
				size?: TokenSize;
				disabled?: boolean;
				class?: string;
				buttonClass?: string;
				activeButtonClass?: string;
				disabledButtonClass?: string;
				onPageChange?: (page: number) => void;
			},
			ILabelSlot,
			IIconSlot,
			IClickable,
			IFocusable,
			ISizable
		]
	> {}
