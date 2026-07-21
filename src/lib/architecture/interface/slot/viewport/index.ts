import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export interface SlotViewport {
	position: Point2D;
	zoom: number;
	width: number;
	height: number;
}
