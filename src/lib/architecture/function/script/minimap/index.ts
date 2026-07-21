import type { MinimapBounds } from '$stylist/architecture/type/struct/minimap-bounds';
import type { RecipeWorkspaceNode } from '$stylist/workspace/interface/recipe/workspace-node';

export function resolveMinimapBounds(nodes: readonly RecipeWorkspaceNode[]): MinimapBounds {
	return {
		minX: nodes.length === 0 ? 0 : Math.min(...nodes.map((node) => node.x)),
		minY: nodes.length === 0 ? 0 : Math.min(...nodes.map((node) => node.y)),
		maxX: nodes.length === 0 ? 800 : Math.max(...nodes.map((node) => node.x + (node.width ?? 200))),
		maxY:
			nodes.length === 0
				? 600
				: Math.max(
						...nodes.map((node) => node.y + (typeof node.height === 'number' ? node.height : 100))
					)
	};
}
