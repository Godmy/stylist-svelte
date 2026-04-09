import type { MinimapPoint } from '$stylist/canvas/type/struct/minimap/minimap-point';

export function resolveMinimapCanvasPoint(
	clientPoint: MinimapPoint,
	rect: DOMRect,
	width: number,
	height: number,
	bounds: { minX: number; minY: number; maxX: number; maxY: number }
): MinimapPoint {
	const x = clientPoint.x - rect.left;
	const y = clientPoint.y - rect.top;

	return {
		x: ((x - width / 2) / width) * (bounds.maxX - bounds.minX),
		y: ((y - height / 2) / height) * (bounds.maxY - bounds.minY)
	};
}
