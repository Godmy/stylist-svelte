export type OntologyEdge = {
	id: string;
	source: string;
	target: string;
	relationship: string;
	label?: string;
	cardinality?: string;
};
