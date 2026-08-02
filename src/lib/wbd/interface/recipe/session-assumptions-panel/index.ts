import type { BehaviorWbdSessionAssumptionsEvents } from '$stylist/wbd/interface/behavior/session-assumptions-events';
import type { SlotWbdSessionAssumptionsPanel } from '$stylist/wbd/interface/slot/session-assumptions-panel';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdSessionAssumptionsPanel
	extends ComputeIntersectAll<[SlotWbdSessionAssumptionsPanel, BehaviorWbdSessionAssumptionsEvents]> {}
