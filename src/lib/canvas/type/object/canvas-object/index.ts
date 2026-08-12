import type { Point2D } from '$stylist/architecture/type/object/point-2d';

export type CanvasObject = {
	[key: string]: any;
	id: string;
	type?: string;
	points?: Point2D[];
};
