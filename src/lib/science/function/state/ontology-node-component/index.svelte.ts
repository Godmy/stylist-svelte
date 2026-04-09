import type { OntologyNodeComponentProps } from '$stylist/science/type/struct/ontology-node-component';
import { OntologyNodeComponentStyleManager } from '$stylist/science/class/style-manager/ontology-node-component';

export function createOntologyNodeComponentState(props: OntologyNodeComponentProps) {
	const style = $derived(OntologyNodeComponentStyleManager.getNodeStyle(props.node.type));
	const baseClasses = $derived(OntologyNodeComponentStyleManager.getBaseClasses(props.node.type, props.class ?? ''));
	const label = $derived(props.node.label || props.node.id);

	return {
		get style() {
			return style;
		},
		get baseClasses() {
			return baseClasses;
		},
		get label() {
			return label;
		}
	};
}

export default createOntologyNodeComponentState;
