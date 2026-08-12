import type { Point2D } from '$stylist/architecture/type/object/point-2d';

export type OntologyNodeComponentProps = {
	node: {
	id: string;
	name: string;
	label?: string;
	type: string;
	position: Point2D;
	width: number;
	height: number;
	attributes?: string[];
};
	showLabel?: boolean;
	class?: string;
};
