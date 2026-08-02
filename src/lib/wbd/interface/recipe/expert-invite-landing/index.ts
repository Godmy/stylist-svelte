import type { BehaviorWbdExpertInviteEvents } from '$stylist/wbd/interface/behavior/expert-invite-events';
import type { SlotWbdExpertInviteLanding } from '$stylist/wbd/interface/slot/expert-invite-landing';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdExpertInviteLanding
	extends ComputeIntersectAll<[SlotWbdExpertInviteLanding, BehaviorWbdExpertInviteEvents]> {}
