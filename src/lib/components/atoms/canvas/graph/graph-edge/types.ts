export type GraphEdgeType = 'line' | 'curve' | 'polyline';

export interface GraphEdgeProps {
  fromNodeId: string;
  toNodeId: string;
  directed?: boolean;
  type?: GraphEdgeType;
  style?: Record<string, string>;
}