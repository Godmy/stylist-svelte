import type { SlotFieldHighlighterSelectedField as IFieldHighlighterSelectedField } from '$stylist/input/interface/slot/field-highlighter-selected-field';
import type { SlotGraphNode as IGraphNode } from '$stylist/input/interface/slot/graph-node';
import type { SlotGraphVisualizationData as IGraphVisualizationData } from '$stylist/input/interface/slot/graph-visualization-data';
import type { SlotFieldHighlighterSelectedField } from '$stylist/input/interface/slot/field-highlighter-selected-field';
import type { SlotGraphNode } from '$stylist/input/interface/slot/graph-node';
import type { SlotGraphVisualizationData } from '$stylist/input/interface/slot/graph-visualization-data';

export interface SlotFieldHighlighter {
	data: SlotGraphVisualizationData;
	selectedNode?: SlotGraphNode | null;
	selectedField?: SlotFieldHighlighterSelectedField | null;
	onNodeClick?: (node: SlotGraphNode) => void;
	onFieldClick?: (node: SlotGraphNode, field: SlotFieldHighlighterSelectedField) => void;
}
