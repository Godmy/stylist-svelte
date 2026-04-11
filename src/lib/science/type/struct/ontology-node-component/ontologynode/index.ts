import type { Position2D } from '$stylist/science/type/struct/ontology-edge-component';

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
