import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotAccessibilityToolbar } from '$stylist/control/interface/slot/accessibility-toolbar';

export interface RecipeAccessibilityToolbar
	extends ComputeIntersectAll<[SlotAccessibilityToolbar, SlotChildren]> {}
