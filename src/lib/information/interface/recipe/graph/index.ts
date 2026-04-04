/**
 * Graph — граф (сеть узлов и рёбер)..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { GraphEdgeRecipe } from '$stylist/information/interface/recipe/graph-edge';
import type { GraphNodeRecipe } from '$stylist/information/interface/recipe/graph-node';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphRecipe extends ThemeAttributes<SVGSVGElement> {
	nodes?: GraphNodeRecipe[];
	edges?: GraphEdgeRecipe[];
	label?: string;
	badge?: string | number;
}

export type GraphNodeProps = GraphNodeRecipe;
export type GraphEdgeProps = GraphEdgeRecipe;
