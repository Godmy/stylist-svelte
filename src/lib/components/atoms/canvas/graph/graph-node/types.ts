export type GraphNodeSize = 'sm' | 'md' | 'lg';
export type GraphNodeType = string; // Could be more specific if needed

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