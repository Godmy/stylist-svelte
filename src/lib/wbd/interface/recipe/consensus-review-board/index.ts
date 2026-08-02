import type { BehaviorWbdConsensusReviewEvents } from '$stylist/wbd/interface/behavior/consensus-review-events';
import type { SlotWbdConsensusReviewBoard } from '$stylist/wbd/interface/slot/consensus-review-board';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdConsensusReviewBoard
	extends ComputeIntersectAll<[SlotWbdConsensusReviewBoard, BehaviorWbdConsensusReviewEvents]> {}
