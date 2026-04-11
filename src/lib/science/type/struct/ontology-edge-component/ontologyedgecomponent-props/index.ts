import type { OntologyEdge } from '../ontologyedge';
import type { OntologyNode } from '../ontologynode';

export type OntologyEdgeComponentProps = {
	edge: OntologyEdge;
	sourceNode: OntologyNode;
	targetNode: OntologyNode;
	showLabel?: boolean;
	class?: string;
};
