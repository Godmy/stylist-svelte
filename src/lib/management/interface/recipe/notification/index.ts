import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface NotificationStateProps extends ComputeIntersectAll<[AnyProperty]> {
	class?: string;
}
