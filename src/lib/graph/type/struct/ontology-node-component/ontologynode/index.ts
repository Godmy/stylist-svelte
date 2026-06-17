import type { Position2D } from '$stylist/graph/type/struct/ontology-edge-component/position2d';

export type OntologyNode = {
	id: string;
	name: string;
	label?: string;
	type: string;
	position: Position2D;
	width: number;
	height: number;
	attributes?: string[];
};
