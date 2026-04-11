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
