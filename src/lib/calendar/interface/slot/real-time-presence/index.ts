import type { SlotRealTimePresenceUser } from '$stylist/calendar/interface/slot/real-time-presence-user';

/**
 * RealTimePresence types and interfaces following SOLID principles
 */

export interface SlotRealTimePresence {
	class?: string;
	users?: SlotRealTimePresenceUser[];
	onpresencechange?: (event: CustomEvent) => void;
}
