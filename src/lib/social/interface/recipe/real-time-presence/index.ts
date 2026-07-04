import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotRealTimePresence } from '$stylist/social/interface/slot/real-time-presence';
import type { SlotRealTimePresenceUser } from '$stylist/social/interface/slot/real-time-presence-user';

export interface RecipeRealTimePresence extends ComputeIntersectAll<[SlotRealTimePresence, SlotChildren]> {
	users: SlotRealTimePresenceUser[];
	showAvatars?: boolean;
	showStatus?: boolean;
	showLastSeen?: boolean;
	showCursorPositions?: boolean;
	title?: string;
	class?: string;
	userListClass?: string;
	userItemClass?: string;
	statusClass?: string;
}
