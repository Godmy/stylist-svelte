import type { MinimapBounds } from '$stylist/canvas/type/struct/minimap/minimap-bounds';
import type { MinimapNodeRect } from '$stylist/canvas/type/struct/minimap/minimap-node-rect';
import type { LiteGraphNodeProps } from '$stylist/science/type/struct/lite-graph-node-props';

export function resolveMinimapNodeRect(
	node: LiteGraphNodeProps,
	bounds: MinimapBounds,
	width: number,
	height: number
): MinimapNodeRect {
	const nodeWidth = node.width ?? 200;
	const nodeHeight = typeof node.height === 'number' ? node.height : 100;
	const xRange = bounds.maxX - bounds.minX || 1;
	const yRange = bounds.maxY - bounds.minY || 1;

	return {
		x: ((node.x - bounds.minX) / xRange) * (width - 20) + 10,
		y: ((node.y - bounds.minY) / yRange) * (height - 20) + 10,
		width: (nodeWidth / xRange) * (width - 20),
		height: (nodeHeight / yRange) * (height - 20)
	};
}
