import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IElevatable } from '$stylist/layout/interface/proto/elevatable';
import type { IShapeable } from '$stylist/layout/interface/proto/shapeable';
import type { ISized } from '$stylist/layout/interface/proto/sized';
import type { ISpaced } from '$stylist/layout/interface/proto/spaced';

export interface CardSkeletonRecipe
	extends RecordArchitectureMerge<[
		ISized,
		IShapeable,
		ISpaced,
		IElevatable
	]>
{}
