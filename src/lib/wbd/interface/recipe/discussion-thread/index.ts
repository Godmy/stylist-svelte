import type { SlotDiscussionThread } from '$stylist/wbd/interface/slot/discussion-thread';
import type { BehaviorWbdDiscussionEvents } from '$stylist/wbd/interface/behavior/discussion-events';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeDiscussionThread
	extends ComputeIntersectAll<[SlotDiscussionThread, BehaviorWbdDiscussionEvents]> {}
