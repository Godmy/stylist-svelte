import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { PerformanceDashboardRecipe } from '$stylist/management/interface/recipe/performance-dashboard';

export interface PerformanceDashboardStateProps extends StructIntersectAll<[PerformanceDashboardRecipe]> {}
