import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/layout/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/layout/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotButtonDom } from '$stylist/button/interface/slot/button-dom';

import type { Snippet } from 'svelte';
export interface RecipeIconButton
	extends ComputeIntersectAll<
		[SlotButtonDom, SlotChildren, HTMLAttributes<HTMLButtonElement>, Omit<IIconSlot, 'icon'>, IClickable, IFocusable, ISizable]
	> {
	class?: string;
	icon?: string | Snippet;

	[prop: string]: unknown;
}
