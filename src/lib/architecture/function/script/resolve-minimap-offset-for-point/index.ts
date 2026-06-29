import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export function resolveMinimapOffsetForPoint(
	point: Point2D,
	miniMapZoom: number
): Point2D {
	return {
		x: -point.x * miniMapZoom,
		y: -point.y * miniMapZoom
	};
}
