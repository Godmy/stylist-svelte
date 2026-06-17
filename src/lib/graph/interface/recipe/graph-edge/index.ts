import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';

/**
 * RecipeGraphEdge — ребро графа.
 */
export interface RecipeGraphEdge
	extends StructIntersectAll<[SlotTheme, Omit<HTMLAttributes<SVGPathElement>, 'style'>]> {
	directed?: boolean;
	type?: TokenTrajectory;
	active?: boolean;
	style?: Record<string, string>;
}
