import type { GraphCanvasPosition } from '$stylist/science/type/struct/graph-canvas-position';

export type GraphCanvasViewport = {
	position: GraphCanvasPosition;
	zoom: number;
	width: number;
	height: number;
};
