// Props for GraphNodeCard component
export interface GraphNodeCardProps {
  node: GraphNodeData;
  expanded?: boolean;
  showDetails?: boolean;
  selected?: boolean;
  highlight?: boolean;
  variant?: 'default' | 'compact' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

/**
 * GraphNode data structure for GraphNodeCard component
 */
export interface GraphNodeData {
  id: string;
  name: string;
  type: string;
  position?: { x: number; y: number };
  width?: number;
  height?: number;
  attributes?: Record<string, any>;
  description?: string;
  fields?: Array<{
    name: string;
    type: string;
    isRequired?: boolean;
    description?: string;
  }>;
}