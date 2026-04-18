import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { StatsCardRecipe } from '$stylist/information/interface/recipe/stats-card';

export interface StatsCardStateProps extends StructIntersectAll<[StatsCardRecipe]> {
	class?: string;
}
