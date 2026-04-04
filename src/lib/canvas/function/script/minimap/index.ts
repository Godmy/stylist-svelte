import type {
	MinimapBounds,
	MinimapNodeRect,
	MinimapOffset,
	MinimapPoint,
	MinimapViewport
} from '$stylist/canvas/type/struct/minimap/minimap';
import type { LiteGraphNodeProps } from '$stylist/information/interface/recipe/litegraph-node';

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

export function resolveMinimapViewport(
	offset: MinimapOffset,
	zoom: number,
	width: number,
	height: number,
	miniMapZoom: number
): MinimapViewport {
	return {
		x: (-offset.x / miniMapZoom) * (width / 800),
		y: (-offset.y / miniMapZoom) * (height / 600),
		width: (800 / zoom) * (width / 800),
		height: (600 / zoom) * (height / 600)
	};
}

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

export function resolveMinimapCanvasPoint(
	clientPoint: MinimapPoint,
	rect: DOMRect,
	width: number,
	height: number,
	bounds: MinimapBounds
): MinimapPoint {
	const x = clientPoint.x - rect.left;
	const y = clientPoint.y - rect.top;

	return {
		x: ((x - width / 2) / width) * (bounds.maxX - bounds.minX),
		y: ((y - height / 2) / height) * (bounds.maxY - bounds.minY)
	};
}

export function resolveMinimapOffsetForPoint(
	point: MinimapPoint,
	miniMapZoom: number
): MinimapOffset {
	return {
		x: -point.x * miniMapZoom,
		y: -point.y * miniMapZoom
	};
}

export function resolveMinimapFitZoom(
	bounds: MinimapBounds,
	width: number,
	height: number
): number {
	const contentWidth = bounds.maxX - bounds.minX;
	const contentHeight = bounds.maxY - bounds.minY;

	if (contentWidth <= 0 || contentHeight <= 0) return 1;

	return Math.min(width / contentWidth, height / contentHeight, 1);
}

export function resolveMinimapFitOffset(bounds: MinimapBounds): MinimapOffset {
	const contentWidth = bounds.maxX - bounds.minX;
	const contentHeight = bounds.maxY - bounds.minY;

	return {
		x: -bounds.minX - contentWidth / 2,
		y: -bounds.minY - contentHeight / 2
	};
}
