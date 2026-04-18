import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/interface/slot';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { TokenPriority } from '$stylist/management/type/enum/priority';
import type { Snippet } from 'svelte';
import type { RealTimePresenceStatus } from '$stylist/calendar/type/struct/real-time-presence-status';

export interface SlotRealTimePresenceUser {
	id: string;
	name: string;
	avatar?: string;
	status: RealTimePresenceStatus;
	lastSeen?: Date;
	cursorPosition?: { x: number; y: number };
	activeArea?: string;
}
