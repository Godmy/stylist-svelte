import type { Point2D } from '$stylist/architecture/type/struct/point-2d';


export type OntologyEdgeComponentProps = {
	edge: {
	id: string;
	source: string;
	target: string;
	relationship: string;
	label?: string;
	cardinality?: string;
};
	sourceNode: {
	id: string;
	name: string;
	type?: string;
	label?: string;
	position?: Point2D;
	width?: number;
	height?: number;
	attributes?: string[];
};
	targetNode: {
	id: string;
	name: string;
	type?: string;
	label?: string;
	position?: Point2D;
	width?: number;
	height?: number;
	attributes?: string[];
};
	showLabel?: boolean;
	class?: string;
};
