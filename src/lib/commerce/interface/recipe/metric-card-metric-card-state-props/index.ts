import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { MetricCardRecipe } from '$stylist/information/interface/recipe/metric-card';

export interface MetricCardStateProps extends StructIntersectAll<[MetricCardRecipe]> {
	class?: string;
}
