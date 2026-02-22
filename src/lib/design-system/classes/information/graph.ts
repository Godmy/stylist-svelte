import type { GraphEdgeType } from '../../tokens';
import type { GraphNodeSize } from '../../contracts';

export const GRAPH_NODE_SIZE_CLASSES: Record<GraphNodeSize, string> = {
	sm: 'w-6 h-6',
	md: 'w-8 h-8',
	lg: 'w-10 h-10'
};

export const GRAPH_NODE_BASE_CLASS = 'graph-node';
export const GRAPH_NODE_SELECTED_CLASS = 'selected';

export const GRAPH_EDGE_BASE_CLASS = 'graph-edge';
export const GRAPH_EDGE_DIRECTED_CLASS = 'directed';
export const GRAPH_EDGE_ACTIVE_CLASS = 'active';
export const GRAPH_EDGE_TYPES: GraphEdgeType[] = ['line', 'curve', 'polyline'];
export const GRAPH_EDGE_TYPE_CLASSES: Record<GraphEdgeType, string> = {
	line: 'graph-edge--line',
	curve: 'graph-edge--curve',
	polyline: 'graph-edge--polyline'
};

export const graphNodeCSS = `
.graph-node {
  background-color: var(--graph-node-color);
  border: 2px solid #94a3b8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
}

.graph-node.selected {
  box-shadow: 0 0 0 2px #f8fafc, 0 0 0 4px #2563eb;
}
`;

export const graphEdgeCSS = `
.graph-edge {
  color: var(--edge-color, #64748b);
}

.graph-edge.directed {
  color: var(--edge-directed-color, var(--edge-color, #2563eb));
}

.graph-edge.active {
  color: var(--edge-active-color, #0f172a);
}
`;
