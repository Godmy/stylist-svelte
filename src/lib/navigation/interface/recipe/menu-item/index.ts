import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotMenuItem } from '$stylist/navigation/interface/slot/menu-item';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeMenuItem
	extends ComputeIntersectAll<
		[
			SlotMenuItem,
			HTMLAttributes<HTMLElement>,
			SlotChildren,
			SlotText,
			SlotIcon,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
