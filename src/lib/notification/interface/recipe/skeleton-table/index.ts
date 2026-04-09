import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IScrollable } from '$stylist/layout/interface/proto/scrollable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';

export interface SkeletonTableRecipe
	extends RecordArchitectureMerge<[
		ISized,
		IShapeable,
		ISpaced,
		IScrollable
	]>
{}
