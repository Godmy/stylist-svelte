import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { GraphEdgeRecipe } from '$stylist/science/interface/recipe/graph-edge';
import type { GraphNodeRecipe } from '$stylist/science/interface/recipe/graph-node';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphRecipe extends StructIntersectAll<[ThemeAttributes<SVGSVGElement>]> {
	nodes?: GraphNodeRecipe[];
	edges?: GraphEdgeRecipe[];
	label?: string;
	badge?: string | number;
}
