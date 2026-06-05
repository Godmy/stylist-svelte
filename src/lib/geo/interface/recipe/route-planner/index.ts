import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RoutePlannerProps } from '$stylist/geo/type/struct/route-planner/routeplanner-props';

export interface RoutePlannerStateProps extends StructIntersectAll<[RoutePlannerProps]> {}
