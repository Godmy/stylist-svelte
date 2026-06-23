import type { AvatarUserStatus } from '$stylist/media/type/struct/avatar-user-status';

export interface SlotRealTimePresenceUser {
	id: string;
	name: string;
	avatar?: string;
	status: AvatarUserStatus;
	lastSeen?: Date;
	cursorPosition?: { x: number; y: number };
	activeArea?: string;
}
