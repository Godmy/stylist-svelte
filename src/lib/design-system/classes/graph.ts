import type { GraphEdgeType } from '../tokens';
import type { GraphNodeSize } from '../props/all-props';

const GRAPH_NODE_SIZE_CLASSES: Record<GraphNodeSize, string> = {
	sm: 'w-6 h-6',
	md: 'w-8 h-8',
	lg: 'w-10 h-10'
};

export const getGraphNodeSizeClasses = (size: GraphNodeSize) => {
	return GRAPH_NODE_SIZE_CLASSES[size];
};

export const getGraphNodePositionStyle = (x: number, y: number) => {
	return `position: absolute; left: ${x}px; top: ${y}px`;
};

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

export const getGraphEdgeClasses = (directed: boolean, type: GraphEdgeType) => {
	const baseClasses = 'graph-edge';
	const directionalClass = directed ? 'directed' : '';
	void type;
	return `${baseClasses} ${directionalClass}`.trim();
};

export const getGraphEdgeStyles = (style: Record<string, string>) => {
	return Object.entries(style)
		.map(([key, value]) => `${key}:${value}`)
		.join(';');
};

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
