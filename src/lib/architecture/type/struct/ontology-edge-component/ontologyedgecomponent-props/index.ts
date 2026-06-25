import type { OntologyEdge } from '$stylist/architecture/type/struct/ontology-edge-component/ontologyedge';
import type { OntologyNode } from '$stylist/architecture/type/struct/ontology-edge-component/ontologynode';

export type OntologyEdgeComponentProps = {
	edge: OntologyEdge;
	sourceNode: OntologyNode;
	targetNode: OntologyNode;
	showLabel?: boolean;
	class?: string;
};
