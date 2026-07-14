import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export interface GraphViewport {
	position: Point2D;
	zoom: number;
	width: number;
	height: number;
}
