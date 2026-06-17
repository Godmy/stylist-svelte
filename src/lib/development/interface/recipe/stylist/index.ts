import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotStylist } from '$stylist/development/interface/slot/stylist';

export interface RecipeStylist extends StructIntersectAll<[SlotStylist]> {}
