import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorDropZoneEvents } from '$stylist/file/interface/behavior/drop-zone-events';
import type { SlotDropZone } from '$stylist/file/interface/slot/drop-zone';

export interface RecipeDropZone
	extends StructIntersectAll<[SlotDropZone, BehaviorDropZoneEvents, SlotChildren]> {}
