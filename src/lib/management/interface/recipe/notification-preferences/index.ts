import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeNotificationPreferences extends ComputeIntersectAll<[AnyProperty]> {
	email?: boolean;
	push?: boolean;
	sms?: boolean;
}
