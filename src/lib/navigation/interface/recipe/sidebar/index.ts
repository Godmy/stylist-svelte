import type { SlotSidebar as SidebarProps } from '$stylist/navigation/interface/slot/sidebar';
import type { Snippet } from 'svelte';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotSidebar as Slot } from '$stylist/navigation/interface/slot/sidebar';
import type { SlotSidebar as SlotSidebar } from '$stylist/navigation/interface/slot/sidebar';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorDraggable as IDraggable } from '$stylist/layout/interface/behavior/draggable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorTransformable as ITransformable } from '$stylist/animation/interface/behavior/transformable';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeSidebar
	extends ComputeIntersectAll<
		[
			ComputeIntersectAll<[SidebarProps]> & {
class?: string;
},
			Slot,
			SlotSidebar,
			SlotTheme,
			SlotText,
			SlotIcon,
			IClickable,
			IDraggable,
			ITransformable,
			IFocusable,
			ISizable,
			IScrollable,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
