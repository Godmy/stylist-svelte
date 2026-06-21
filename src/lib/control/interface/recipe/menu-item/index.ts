import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotMenuItem } from '$stylist/control/interface/slot/menu-item';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeMenuItem
	extends ComputeIntersectAll<
		[
			SlotMenuItem,
			HTMLAttributes<HTMLElement>,
			SlotChildren,
			SlotLabel,
			SlotIcon,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}