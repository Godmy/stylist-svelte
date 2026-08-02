import type { BehaviorWbdSessionListEvents } from '$stylist/wbd/interface/behavior/session-list-events';
import type { SlotWbdSessionList } from '$stylist/wbd/interface/slot/session-list';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdSessionList
	extends ComputeIntersectAll<[SlotWbdSessionList, BehaviorWbdSessionListEvents]> {}
