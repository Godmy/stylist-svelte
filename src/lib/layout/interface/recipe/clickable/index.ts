import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorClickable } from '$stylist/layout/interface/behavior/clickable';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeClickable extends ComputeIntersectAll<[BehaviorClickable, SlotChildren]> {
	variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'link';
	class?: string;
}