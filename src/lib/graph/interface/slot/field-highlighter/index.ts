import type { SlotFieldHighlighterSelectedField } from '$stylist/graph/interface/slot/field-highlighter-selected-field';
import type { SlotGraphNode } from '$stylist/graph/interface/slot/graph-node';
import type { SlotGraphVisualizationData } from '$stylist/graph/interface/slot/graph-visualization-data';

export interface SlotFieldHighlighter {
	data: SlotGraphVisualizationData;
	selectedNode?: SlotGraphNode | null;
	selectedField?: SlotFieldHighlighterSelectedField | null;
	onNodeClick?: (node: SlotGraphNode) => void;
	onFieldClick?: (node: SlotGraphNode, field: SlotFieldHighlighterSelectedField) => void;
}
