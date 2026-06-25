import type { Position2D } from '$stylist/architecture/type/struct/ontology-edge-component/position2d';

export type OntologyNode = {
	id: string;
	name: string;
	type?: string;
	label?: string;
	position?: Position2D;
	width?: number;
	height?: number;
	attributes?: string[];
};
