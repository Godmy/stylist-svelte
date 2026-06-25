import type { OntologyNode } from '$stylist/architecture/type/struct/ontology-node-component/ontologynode';

export type OntologyNodeComponentProps = {
	node: OntologyNode;
	showLabel?: boolean;
	class?: string;
};
