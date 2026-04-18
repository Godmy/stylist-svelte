import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface SkeletonTableRecipe
	extends StructIntersectAll<[
		ISized,
		IShapeable,
		ISpaced,
		IScrollable
	]>
{}

