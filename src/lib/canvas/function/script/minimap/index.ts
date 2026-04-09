import type { MinimapBounds } from '$stylist/canvas/type/struct/minimap/minimap-bounds';
import type { LiteGraphNodeProps } from '$stylist/science/interface/recipe/litegraph-node';

export function resolveMinimapBounds(nodes: readonly LiteGraphNodeProps[]): MinimapBounds {
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
