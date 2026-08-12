import type { TOKEN_AVAILABILITY } from '$stylist/user/const/array/availability';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
export interface RecipeRealTimePresence extends ComputeIntersectAll<[SlotChildren]> {
	onpresencechange?: (event: CustomEvent) => void;

	users: ({
id: string;
	name: string;
	avatar?: string;
	status: (typeof TOKEN_AVAILABILITY)[number];
	lastSeen?: Date;
	cursorPosition?: { x: number; y: number };
	activeArea?: string;
})[];
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
