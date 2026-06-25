import type { OntologyNodeComponentProps } from '$stylist/architecture/type/struct/ontology-node-component/ontologynodecomponent-props';

const NODE_ICON_MAP: Record<string, string> = {
	class: 'square',
	'object-property': 'arrow-right',
	'datatype-property': 'database',
	datatype: 'type',
	deprecated: 'x',
	'equivalent-class': 'zap'
};

export function createOntologyNodeComponentState(props: OntologyNodeComponentProps) {
	const nodeType = $derived(props.node.type);
	const baseClasses = $derived(
		['ontology-node-component', `ontology-node-component--${nodeType}`, props.class ?? '']
			.filter(Boolean)
			.join(' ')
	);
	const iconName = $derived(NODE_ICON_MAP[nodeType] ?? 'circle');
	const label = $derived(props.node.label || props.node.id);

	return {
		get baseClasses() {
			return baseClasses;
		},
		get iconName() {
			return iconName;
		},
		get label() {
			return label;
		}
	};
}

export default createOntologyNodeComponentState;
