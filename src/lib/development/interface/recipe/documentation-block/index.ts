import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotDocumentationBlock } from '$stylist/development/interface/slot/documentation-block';

export interface RecipeDocumentationBlock
	extends ComputeIntersectAll<[SlotDocumentationBlock]> {}
