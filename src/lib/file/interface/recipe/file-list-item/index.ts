import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFileListItem } from '$stylist/file/interface/slot/file-list-item';

export interface RecipeFileListItem extends StructIntersectAll<[SlotFileListItem]> {}
