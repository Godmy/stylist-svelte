import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct/item';

export type PresenceStatus = 'online' | 'away' | 'busy' | 'offline';

export interface PresenceUser {
	id: string;
	name: string;
	avatar?: string;
	status: PresenceStatus;
	lastSeen?: Date;
	cursorPosition?: { x: number; y: number };
	activeArea?: string;
}

export interface RealTimePresenceContractBase {
	users: PresenceUser[];
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

export type RealTimePresenceContract = RecordArchitectureMerge<
	[
		RealTimePresenceContractBase,
		CalendarHTMLAttributes<HTMLDivElement>
	]
>;
