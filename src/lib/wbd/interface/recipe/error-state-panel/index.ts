import type { BehaviorWbdErrorStateEvents } from '$stylist/wbd/interface/behavior/error-state-events';
import type { SlotWbdErrorStatePanel } from '$stylist/wbd/interface/slot/error-state-panel';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdErrorStatePanel
	extends ComputeIntersectAll<[SlotWbdErrorStatePanel, BehaviorWbdErrorStateEvents]> {}
