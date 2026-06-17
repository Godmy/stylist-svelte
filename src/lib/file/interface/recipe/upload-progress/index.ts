import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotUploadProgress } from '$stylist/file/interface/slot/upload-progress';

export interface RecipeUploadProgress extends StructIntersectAll<[SlotUploadProgress]> {
	class?: string;
}
