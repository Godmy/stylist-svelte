import type { BehaviorWbdDiscussionRoundFilterEvents } from '$stylist/wbd/interface/behavior/discussion-round-filter-events';
import type { SlotWbdDiscussionRoundFilter } from '$stylist/wbd/interface/slot/discussion-round-filter';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdDiscussionRoundFilter
	extends ComputeIntersectAll<[SlotWbdDiscussionRoundFilter, BehaviorWbdDiscussionRoundFilterEvents]> {}
