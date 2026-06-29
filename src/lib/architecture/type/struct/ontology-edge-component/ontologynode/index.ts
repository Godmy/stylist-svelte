import type { Point2D } from '$stylist/architecture/type/struct/point-2d';

export type OntologyNode = {
	id: string;
	name: string;
	type?: string;
	label?: string;
	position?: Point2D;
	width?: number;
	height?: number;
	attributes?: string[];
};
