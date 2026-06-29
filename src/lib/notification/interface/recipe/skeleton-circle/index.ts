import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface RecipeSkeletonCircle
	extends ComputeIntersectAll<[AnyProperty, ISized, IShapeable, ISpaced]> {}
