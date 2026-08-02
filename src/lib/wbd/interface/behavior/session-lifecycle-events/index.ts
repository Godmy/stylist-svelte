import type { StructWbdSessionLifecycleAction } from '$stylist/wbd/type/struct/session-lifecycle-action';

export interface BehaviorWbdSessionLifecycleEvents {
	onTriggerAction?: (action: StructWbdSessionLifecycleAction) => void;
}
