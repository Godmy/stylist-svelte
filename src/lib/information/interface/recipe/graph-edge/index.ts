/**
 * GraphEdge — ребро графа..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type GraphEdgeRecipe = Omit<ThemeAttributes<SVGPathElement>, 'style'> & {
	directed?: boolean;
	type?: TokenTrajectory;
	active?: boolean;
	style?: Record<string, string>;
};
