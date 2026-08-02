import type { BehaviorWbdSessionLifecycleEvents } from '$stylist/wbd/interface/behavior/session-lifecycle-events';
import type { SlotWbdSessionLifecycleToolbar } from '$stylist/wbd/interface/slot/session-lifecycle-toolbar';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdSessionLifecycleToolbar
	extends ComputeIntersectAll<[SlotWbdSessionLifecycleToolbar, BehaviorWbdSessionLifecycleEvents]> {}
