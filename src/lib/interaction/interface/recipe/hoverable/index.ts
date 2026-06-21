import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorHoverable } from '$stylist/interaction/interface/behavior/hoverable';
import type { SlotHoverable } from '$stylist/interaction/interface/slot/hoverable';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeHoverable extends ComputeIntersectAll<[SlotHoverable, BehaviorHoverable, SlotChildren]> {}