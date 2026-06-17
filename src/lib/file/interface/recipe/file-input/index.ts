import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFileInput } from '$stylist/file/interface/slot/file-input';

export interface RecipeFileInput extends StructIntersectAll<[SlotFileInput]> {}
