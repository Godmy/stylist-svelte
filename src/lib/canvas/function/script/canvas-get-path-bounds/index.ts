import type { SharedCanvasObjectBounds } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-object-bounds';
import type { SharedCanvasPoint } from '$stylist/canvas/type/struct/shared-canvas/shared-canvas-point';

export function getPathBounds(points: readonly SharedCanvasPoint[]): SharedCanvasObjectBounds {
	const xs = points.map((point) => point.x);
	const ys = points.map((point) => point.y);
	const minX = Math.min(...xs);
	const minY = Math.min(...ys);
	const maxX = Math.max(...xs);
	const maxY = Math.max(...ys);

	return {
		x: minX,
		y: minY,
		width: Math.max(1, maxX - minX),
		height: Math.max(1, maxY - minY)
	};
}
