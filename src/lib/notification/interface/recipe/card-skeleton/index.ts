import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface CardSkeletonRecipe
	extends StructIntersectAll<[
		ISized,
		IShapeable,
		ISpaced,
		IElevatable
	]>
{}

