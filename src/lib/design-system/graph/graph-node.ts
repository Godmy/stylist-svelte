export type GraphNodeSize = 'sm' | 'md' | 'lg';
export type GraphNodeType = string;

export interface GraphNodeProps {
  id: string;
  x: number;
  y: number;
  label?: string;
  type?: GraphNodeType;
  color?: string;
  size?: GraphNodeSize;
  children?: any;
}

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
  background-color: var(--color, #3b82f6);
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
