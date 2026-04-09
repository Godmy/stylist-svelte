import type { MinimapBounds } from '$stylist/canvas/type/struct/minimap/minimap-bounds';
import type { LiteGraphNodeProps } from '$stylist/science/interface/recipe/litegraph-node';

export function resolveMinimapViewport(
	offset: { x: number; y: number },
	zoom: number,
	width: number,
	height: number,
	miniMapZoom: number
): { x: number; y: number; width: number; height: number } {
	return {
		x: (-offset.x / miniMapZoom) * (width / 800),
		y: (-offset.y / miniMapZoom) * (height / 600),
		width: (800 / zoom) * (width / 800),
		height: (600 / zoom) * (height / 600)
	};
}
