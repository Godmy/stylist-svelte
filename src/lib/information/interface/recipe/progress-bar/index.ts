import type { BehaviorProgressValue } from '$stylist/information/interface/behavior/progress-value';
import type { SlotProgressBar } from '$stylist/information/interface/slot/progress-bar';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeProgressBar
	extends ComputeIntersectAll<[BehaviorProgressValue, SlotProgressBar]> {}
