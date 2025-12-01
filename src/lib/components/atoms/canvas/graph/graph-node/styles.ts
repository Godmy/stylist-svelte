import type { GraphNodeSize } from './types';

export const getGraphNodeSizeClasses = (size: GraphNodeSize) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return sizeClasses[size];
};

export const getGraphNodePositionStyle = (x: number, y: number) => {
  return `position: absolute; left: ${x}px; top: ${y}px`;
};

// CSS-in-JS styles for GraphNode
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