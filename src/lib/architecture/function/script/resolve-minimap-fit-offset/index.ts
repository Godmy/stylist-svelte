import type { MinimapOffset } from '$stylist/architecture/type/struct/minimap-offset';

export function resolveMinimapFitOffset(bounds: {
	minX: number;
	minY: number;
	maxX: number;
	maxY: number;
}): MinimapOffset {
	const contentWidth = bounds.maxX - bounds.minX;
	const contentHeight = bounds.maxY - bounds.minY;

	return {
		x: -bounds.minX - contentWidth / 2,
		y: -bounds.minY - contentHeight / 2
	};
}
