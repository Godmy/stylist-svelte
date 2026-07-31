import type { SlotRoundCollectionPanel } from '$stylist/wbd/interface/slot/round-collection-panel';
import type { BehaviorWbdTaskEstimateSubmit } from '$stylist/wbd/interface/behavior/task-estimate-submit';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeRoundCollectionPanel
	extends ComputeIntersectAll<[SlotRoundCollectionPanel, BehaviorWbdTaskEstimateSubmit]> {}
