export type Position2D = {
	x: number;
	y: number;
};

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

export type OntologyEdge = {
	id: string;
	source: string;
	target: string;
	relationship: string;
	label?: string;
	cardinality?: string;
};

export interface OntologyEdgeComponentProps {
	edge: OntologyEdge;
	sourceNode: OntologyNode;
	targetNode: OntologyNode;
	showLabel?: boolean;
	class?: string;
}
