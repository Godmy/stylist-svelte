import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export function resolveMinimapFitOffset(bounds: {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}): Point2D {
	const contentWidth = bounds.maxX - bounds.minX;
	const contentHeight = bounds.maxY - bounds.minY;

	return {
		x: -bounds.minX - contentWidth / 2,
		y: -bounds.minY - contentHeight / 2
	};
}
