import type { IFieldHighlighterSelectedField } from '$stylist/input/interface/api/field-highlighter-selected-field';
import type { IGraphNode } from '$stylist/input/interface/api/graph-node';
import type { IGraphVisualizationData } from '$stylist/input/interface/api/graph-visualization-data';

export interface IFieldHighlighterProps {
	data: IGraphVisualizationData;
	selectedNode?: IGraphNode | null;
	selectedField?: IFieldHighlighterSelectedField | null;
	onNodeClick?: (node: IGraphNode) => void;
	onFieldClick?: (node: IGraphNode, field: IFieldHighlighterSelectedField) => void;
}
