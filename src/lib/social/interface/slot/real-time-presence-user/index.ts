
import type { TOKEN_AVAILABILITY } from '$stylist/interaction/const/enum/availability';
export interface SlotRealTimePresenceUser {
	id: string;
	name: string;
	avatar?: string;
	status: (typeof TOKEN_AVAILABILITY)[number];
	lastSeen?: Date;
	cursorPosition?: { x: number; y: number };
	activeArea?: string;
}
