import type { IFieldHighlighterProps } from '$stylist/input/interface/component/field-highlighter/other';
import type { IFieldHighlighterSelectedField } from '$stylist/input/interface/api/field-highlighter-selected-field';
import type { IGraphEdge } from '$stylist/input/interface/api/graph-edge';
import type { IGraphNode } from '$stylist/input/interface/api/graph-node';

export const createFieldHighlighterState = (props: IFieldHighlighterProps) => {
	function handleNodeClick(node: IGraphNode) {
		props.onNodeClick?.(node);
	}

	function handleFieldClick(node: IGraphNode, field: IFieldHighlighterSelectedField) {
		props.onFieldClick?.(node, field);
	}

	function isNodeHighlighted(node: IGraphNode) {
		if (!props.selectedField) {
			return false;
		}

		return (
			props.selectedNode?.id === node.id ||
			(node.label ? node.label.includes(props.selectedField.name) : false)
		);
	}

	function isEdgeHighlighted(edge: IGraphEdge) {
		if (!props.selectedField || !props.selectedNode) {
			return false;
		}

		return edge.fromNodeId === props.selectedNode.id || edge.toNodeId === props.selectedNode.id;
	}

	return {
		get data() {
			return props.data;
		},
		get selectedNode() {
			return props.selectedNode ?? null;
		},
		get selectedField() {
			return props.selectedField ?? null;
		},
		handleNodeClick,
		handleFieldClick,
		isNodeHighlighted,
		isEdgeHighlighted
	};
};

export default createFieldHighlighterState;
