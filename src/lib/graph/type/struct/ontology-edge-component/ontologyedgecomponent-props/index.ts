import type { OntologyEdge } from '$stylist/graph/type/struct/ontology-edge-component/ontologyedge';
import type { OntologyNode } from '$stylist/graph/type/struct/ontology-edge-component/ontologynode';

export type OntologyEdgeComponentProps = {
	edge: OntologyEdge;
	sourceNode: OntologyNode;
	targetNode: OntologyNode;
	showLabel?: boolean;
	class?: string;
};
