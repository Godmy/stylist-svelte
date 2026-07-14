import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export type ConnectionPathResult = {
	path: string;
	length: number;
	midPoint: Point2D;
	angle: number;
};
