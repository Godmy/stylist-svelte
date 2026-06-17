import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotDebugConsole } from '$stylist/development/interface/slot/debug-console';

export interface RecipeDebugConsole extends StructIntersectAll<[SlotDebugConsole]> {}
