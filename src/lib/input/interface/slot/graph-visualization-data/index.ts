import type { SlotGraphEdge as IGraphEdge } from '$stylist/input/interface/slot/graph-edge';
import type { SlotGraphNode as IGraphNode } from '$stylist/input/interface/slot/graph-node';
import type { SlotGraphEdge } from '$stylist/input/interface/slot/graph-edge';
import type { SlotGraphNode } from '$stylist/input/interface/slot/graph-node';

export interface SlotGraphVisualizationData {
	nodes: SlotGraphNode[];
	edges: SlotGraphEdge[];
}
