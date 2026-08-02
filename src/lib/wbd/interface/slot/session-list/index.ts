import type { StructWbdSession } from '$stylist/wbd/type/struct/session';

export interface SlotWbdSessionList {
	sessions: StructWbdSession[];
	selectedSessionId?: string;
	class?: string;
}
