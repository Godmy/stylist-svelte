import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export function resolveMinimapCanvasPoint(
	clientPoint: Point2D,
	rect: DOMRect,
	width: number,
	height: number,
	bounds: { minX: number; minY: number; maxX: number; maxY: number }
): Point2D {
	const x = clientPoint.x - rect.left;
	const y = clientPoint.y - rect.top;

	return {
		x: ((x - width / 2) / width) * (bounds.maxX - bounds.minX),
		y: ((y - height / 2) / height) * (bounds.maxY - bounds.minY)
	};
}
