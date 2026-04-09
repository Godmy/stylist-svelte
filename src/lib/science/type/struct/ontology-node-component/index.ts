import type { Position2D, OntologyNode as BaseOntologyNode } from '$stylist/science/type/struct/ontology-edge-component';

export type OntologyNode = Omit<BaseOntologyNode, 'type'> & {
	type: string;
};

export interface OntologyNodeComponentProps {
	node: OntologyNode;
	showLabel?: boolean;
	class?: string;
}
