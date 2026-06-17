import type { GraphPosition2D } from '$stylist/graph/type/struct/graph-position-2d';

export interface GraphViewport {
	position: GraphPosition2D;
	zoom: number;
	width: number;
	height: number;
}
