import type { MinimapBounds } from '$stylist/architecture/type/object/minimap-bounds';
import type { RecipeWorkspaceNode } from '$stylist/workspace/interface/recipe/workspace-node';

export function resolveMinimapNodeRect(
	node: RecipeWorkspaceNode,
	bounds: MinimapBounds,
	width: number,
	height: number
): {
	x: number;
	y: number;
	width: number;
	height: number;
} {
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
