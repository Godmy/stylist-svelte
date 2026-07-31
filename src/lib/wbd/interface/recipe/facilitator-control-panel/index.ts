import type { SlotFacilitatorControlPanel } from '$stylist/wbd/interface/slot/facilitator-control-panel';
import type { BehaviorWbdRoundControls } from '$stylist/wbd/interface/behavior/round-controls';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeFacilitatorControlPanel
	extends ComputeIntersectAll<[SlotFacilitatorControlPanel, BehaviorWbdRoundControls]> {}
