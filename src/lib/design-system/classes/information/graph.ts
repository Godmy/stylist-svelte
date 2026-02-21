import type { GraphEdgeType } from '../../tokens';
import type { GraphNodeSize } from '../../props';

export const GRAPH_NODE_SIZE_CLASSES: Record<GraphNodeSize, string> = {
	sm: 'w-6 h-6',
	md: 'w-8 h-8',
	lg: 'w-10 h-10'
};

export const GRAPH_EDGE_BASE_CLASS = 'graph-edge';
export const GRAPH_EDGE_DIRECTED_CLASS = 'directed';
export const GRAPH_EDGE_TYPES: GraphEdgeType[] = ['line', 'curve', 'polyline'];

export const graphNodeCSS = `
.graph-node {
  background-color: var(--color);
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
`;

export const graphEdgeCSS = `
.graph-edge {
  stroke: #94a3b8;
  stroke-width: 2px;
  fill: none;
}

.graph-edge.directed {
  marker-end: url(#arrowhead);
}
`;
