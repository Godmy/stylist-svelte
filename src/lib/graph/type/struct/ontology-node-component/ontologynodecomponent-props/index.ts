import type { OntologyNode } from '$stylist/graph/type/struct/ontology-node-component/ontologynode';

export type OntologyNodeComponentProps = {
	node: OntologyNode;
	showLabel?: boolean;
	class?: string;
};
