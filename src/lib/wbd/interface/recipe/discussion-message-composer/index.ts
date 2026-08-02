import type { BehaviorWbdDiscussionMessageComposeEvents } from '$stylist/wbd/interface/behavior/discussion-message-compose-events';
import type { SlotWbdDiscussionMessageComposer } from '$stylist/wbd/interface/slot/discussion-message-composer';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdDiscussionMessageComposer
	extends ComputeIntersectAll<[SlotWbdDiscussionMessageComposer, BehaviorWbdDiscussionMessageComposeEvents]> {}
