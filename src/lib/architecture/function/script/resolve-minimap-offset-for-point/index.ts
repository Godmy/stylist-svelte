import type { GraphPosition2D } from '$stylist/architecture/type/struct/graph-position-2d';

export function resolveMinimapOffsetForPoint(
	point: GraphPosition2D,
	miniMapZoom: number
): GraphPosition2D {
	return {
		x: -point.x * miniMapZoom,
		y: -point.y * miniMapZoom
	};
}
