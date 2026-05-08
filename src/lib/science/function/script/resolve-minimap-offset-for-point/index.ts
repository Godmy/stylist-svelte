import type { MinimapOffset } from '$stylist/science/type/struct/minimap/minimap-offset';
import type { MinimapPoint } from '$stylist/science/type/struct/minimap/minimap-point';

export function resolveMinimapOffsetForPoint(
	point: MinimapPoint,
	miniMapZoom: number
): MinimapOffset {
	return {
		x: -point.x * miniMapZoom,
		y: -point.y * miniMapZoom
	};
}
