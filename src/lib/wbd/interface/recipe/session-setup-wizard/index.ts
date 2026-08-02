import type { BehaviorWbdSessionSetupEvents } from '$stylist/wbd/interface/behavior/session-setup-events';
import type { SlotWbdSessionSetupWizard } from '$stylist/wbd/interface/slot/session-setup-wizard';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdSessionSetupWizard
	extends ComputeIntersectAll<[SlotWbdSessionSetupWizard, BehaviorWbdSessionSetupEvents]> {}
