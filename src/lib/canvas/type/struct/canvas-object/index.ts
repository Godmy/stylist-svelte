import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export type CanvasObject = {
	[key: string]: any;
	id: string;
	type?: string;
	points?: Point2D[];
};
