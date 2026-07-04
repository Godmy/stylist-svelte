import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorHoverable } from '$stylist/interaction/interface/behavior/hoverable';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeHoverable extends ComputeIntersectAll<[SlotClass, BehaviorHoverable, SlotChildren]> {}
