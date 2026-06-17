import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotResourceOptimizer } from '$stylist/development/interface/slot/resource-optimizer';

export interface RecipeResourceOptimizer extends StructIntersectAll<[SlotResourceOptimizer]> {}
