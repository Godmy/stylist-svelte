import type { StructWbdSession } from '$stylist/wbd/type/struct/session';
import type { StructWbdSessionLifecycleAction } from '$stylist/wbd/type/struct/session-lifecycle-action';

export interface SlotWbdSessionLifecycleToolbar {
	session: StructWbdSession;
	actions?: StructWbdSessionLifecycleAction[];
	class?: string;
}
