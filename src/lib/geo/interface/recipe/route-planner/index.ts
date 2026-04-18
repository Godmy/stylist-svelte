import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RoutePlannerLocation, RouteOption, RoutePlannerProps } from '$stylist/geo/type/struct/route-planner';

export interface RoutePlannerStateProps extends StructIntersectAll<[RoutePlannerProps]> {}
