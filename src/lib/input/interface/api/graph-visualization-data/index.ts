import type { IGraphEdge } from '$stylist/input/interface/api/graph-edge';
import type { IGraphNode } from '$stylist/input/interface/api/graph-node';

export interface IGraphVisualizationData {
	nodes: IGraphNode[];
	edges: IGraphEdge[];
}
