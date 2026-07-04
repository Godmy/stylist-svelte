import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorDropZoneEvents } from '$stylist/file/interface/behavior/drop-zone-events';
import type { SlotDropZone } from '$stylist/file/interface/slot/drop-zone';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeDropZone
	extends ComputeIntersectAll<[SlotDropZone, BehaviorDropZoneEvents, SlotChildren]> {}