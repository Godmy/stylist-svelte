export type OntologyNode = Omit<BaseOntologyNode, 'type'> & {
	type: string;
};
