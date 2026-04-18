import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { StatusDashboardRecipe } from '$stylist/management/interface/recipe/status-dashboard';

export interface StatusDashboardStateProps extends StructIntersectAll<[StatusDashboardRecipe]> {}
