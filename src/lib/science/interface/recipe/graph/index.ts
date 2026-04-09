import type { GraphEdgeRecipe } from '$stylist/science/interface/recipe/graph-edge';
import type { GraphNodeRecipe } from '$stylist/science/interface/recipe/graph-node';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphRecipe extends ThemeAttributes<SVGSVGElement> {
	nodes?: GraphNodeRecipe[];
	edges?: GraphEdgeRecipe[];
	label?: string;
	badge?: string | number;
}
