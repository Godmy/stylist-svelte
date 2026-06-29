import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export type OntologyNode = {
	id: string;
	name: string;
	label?: string;
	type: string;
	position: Point2D;
	width: number;
	height: number;
	attributes?: string[];
};
