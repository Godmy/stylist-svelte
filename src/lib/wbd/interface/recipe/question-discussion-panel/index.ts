import type { BehaviorWbdDiscussionMessageComposeEvents } from '$stylist/wbd/interface/behavior/discussion-message-compose-events';
import type { BehaviorWbdDiscussionRoundFilterEvents } from '$stylist/wbd/interface/behavior/discussion-round-filter-events';
import type { SlotWbdQuestionDiscussionPanel } from '$stylist/wbd/interface/slot/question-discussion-panel';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdQuestionDiscussionPanel
	extends ComputeIntersectAll<
		[SlotWbdQuestionDiscussionPanel, BehaviorWbdDiscussionMessageComposeEvents, BehaviorWbdDiscussionRoundFilterEvents]
	> {}
