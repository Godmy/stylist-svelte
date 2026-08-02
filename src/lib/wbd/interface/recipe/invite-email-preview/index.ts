import type { BehaviorWbdInviteEmailPreviewEvents } from '$stylist/wbd/interface/behavior/invite-email-preview-events';
import type { SlotWbdInviteEmailPreview } from '$stylist/wbd/interface/slot/invite-email-preview';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdInviteEmailPreview
	extends ComputeIntersectAll<[SlotWbdInviteEmailPreview, BehaviorWbdInviteEmailPreviewEvents]> {}
