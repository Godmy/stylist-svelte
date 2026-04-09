import { createEventDispatcher } from 'svelte';
import { GraphNodeCardStyleManager } from '$stylist/science/class/style-manager/graph-node-card';
import type { GraphNodeCardData } from '$stylist/science/type/struct/graph-node-card-data';
import type { GraphNodeCardProps } from '$stylist/science/type/struct/graph-node-card-props';

export function createGraphNodeCardState(props: GraphNodeCardProps) {
	const dispatch = createEventDispatcher<{
		toggleExpand: { node: GraphNodeCardData };
		viewDetails: { node: GraphNodeCardData };
		addField: { node: GraphNodeCardData };
		fieldClick: { field: { name: string; type: string; isRequired?: boolean } };
	}>();

	let isExpanded = $state(props.expanded ?? false);

	$effect(() => {
		isExpanded = props.expanded ?? false;
	});

	const containerClass = $derived(
		GraphNodeCardStyleManager.getContainerClass(
			props.variant ?? 'default',
			props.size ?? 'md',
			props.selected ?? false,
			props.highlight ?? false,
			props.class ?? ''
		)
	);
	const headerClass = GraphNodeCardStyleManager.getHeaderClass();
	const titleClass = GraphNodeCardStyleManager.getTitleClass();
	const typeClass = $derived(GraphNodeCardStyleManager.getTypeClass(props.node.type));
	const contentClass = GraphNodeCardStyleManager.getContentClass();
	const descriptionClass = GraphNodeCardStyleManager.getDescriptionClass();
	const fieldsListClass = GraphNodeCardStyleManager.getFieldsListClass();
	const fieldItemClass = GraphNodeCardStyleManager.getFieldItemClass();
	const fieldNameClass = GraphNodeCardStyleManager.getFieldNameClass();
	const fieldTypeClass = GraphNodeCardStyleManager.getFieldTypeClass();
	const fieldRequiredClass = GraphNodeCardStyleManager.getFieldRequiredClass();
	const actionsClass = GraphNodeCardStyleManager.getActionsClass();

	function getIconName(type: string) {
		switch (type) {
			case 'object':
				return 'object';
			case 'interface':
				return 'interface';
			case 'union':
				return 'union';
			case 'enum':
				return 'enum';
			case 'scalar':
				return 'scalar';
			case 'input':
				return 'input';
			default:
				return 'default';
		}
	}

	function toggleExpanded() {
		isExpanded = !isExpanded;
		dispatch('toggleExpand', { node: props.node });
	}

	function handleFieldClick(field: { name: string; type: string; isRequired?: boolean }) {
		dispatch('fieldClick', { field });
	}

	function handleViewDetails() {
		dispatch('viewDetails', { node: props.node });
	}

	function handleAddField() {
		dispatch('addField', { node: props.node });
	}

	return {
		get isExpanded() {
			return isExpanded;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get titleClass() {
			return titleClass;
		},
		get typeClass() {
			return typeClass;
		},
		get contentClass() {
			return contentClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get fieldsListClass() {
			return fieldsListClass;
		},
		get fieldItemClass() {
			return fieldItemClass;
		},
		get fieldNameClass() {
			return fieldNameClass;
		},
		get fieldTypeClass() {
			return fieldTypeClass;
		},
		get fieldRequiredClass() {
			return fieldRequiredClass;
		},
		get actionsClass() {
			return actionsClass;
		},
		getIconName,
		toggleExpanded,
		handleFieldClick,
		handleViewDetails,
		handleAddField
	};
}

export default createGraphNodeCardState;
