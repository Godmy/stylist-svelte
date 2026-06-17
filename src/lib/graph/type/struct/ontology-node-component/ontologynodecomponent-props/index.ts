import type { OntologyNode } from '../ontologynode';

export type OntologyNodeComponentProps = {
	node: OntologyNode;
	showLabel?: boolean;
	class?: string;
};
