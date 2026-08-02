import type { BehaviorWbdSessionExpertInviteEvents } from '$stylist/wbd/interface/behavior/session-expert-invite-events';
import type { SlotWbdSessionExpertInvitePanel } from '$stylist/wbd/interface/slot/session-expert-invite-panel';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdSessionExpertInvitePanel
	extends ComputeIntersectAll<[SlotWbdSessionExpertInvitePanel, BehaviorWbdSessionExpertInviteEvents]> {}
