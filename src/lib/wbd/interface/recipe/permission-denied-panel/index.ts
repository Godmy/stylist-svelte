import type { BehaviorWbdPermissionDeniedEvents } from '$stylist/wbd/interface/behavior/permission-denied-events';
import type { SlotWbdPermissionDeniedPanel } from '$stylist/wbd/interface/slot/permission-denied-panel';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdPermissionDeniedPanel
	extends ComputeIntersectAll<[SlotWbdPermissionDeniedPanel, BehaviorWbdPermissionDeniedEvents]> {}
