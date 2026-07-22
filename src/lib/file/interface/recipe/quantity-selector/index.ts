import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotQuantitySelector } from '$stylist/file/interface/slot/quantity-selector';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeQuantitySelector
	extends ComputeIntersectAll<
		[SlotQuantitySelector, SlotText, BehaviorClickable, BehaviorFocusable, BehaviorSizable]
	> {}
