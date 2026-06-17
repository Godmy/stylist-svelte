import type { GraphPosition2D } from '$stylist/graph/type/struct/graph-position-2d';

export function resolveMinimapCanvasPoint(
	clientPoint: GraphPosition2D,
	rect: DOMRect,
	width: number,
	height: number,
	bounds: { minX: number; minY: number; maxX: number; maxY: number }
): GraphPosition2D {
	const x = clientPoint.x - rect.left;
	const y = clientPoint.y - rect.top;

	return {
		x: ((x - width / 2) / width) * (bounds.maxX - bounds.minX),
		y: ((y - height / 2) / height) * (bounds.maxY - bounds.minY)
	};
}
