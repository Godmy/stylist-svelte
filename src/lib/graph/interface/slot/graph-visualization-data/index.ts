import type { SlotGraphEdge } from '$stylist/graph/interface/slot/graph-edge';
import type { SlotGraphNode } from '$stylist/graph/interface/slot/graph-node';

export interface SlotGraphVisualizationData {
	nodes: SlotGraphNode[];
	edges: SlotGraphEdge[];
}
