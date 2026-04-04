/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { Snippet } from 'svelte';

export interface LiteGraphPort {
  id: string;
  name: string;
  type: string;
  direction: 'input' | 'output';
  index?: number;
}

export interface LiteGraphNodeProperty {
  id: string;
  name: string;
  type: string;
  value: unknown;
  label?: string;
  description?: string;
  options?: Record<string, unknown>[];
}

export interface LitegraphNodeRecipe {
  id?: string;
  title?: string;
  type?: string;
  mode?: string;
  status?: string;
  x?: number;
  y?: number;
  width?: number;
  minWidth?: number;
  height?: number | 'auto';
  color?: string;
  headerColor?: string;
  size?: 'sm' | 'md' | 'lg';
  inputs?: LiteGraphPort[];
  outputs?: LiteGraphPort[];
  properties?: LiteGraphNodeProperty[];
  selected?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  resizable?: boolean;
  deletable?: boolean;
  duplicable?: boolean;
  hideHeader?: boolean;
  hidePorts?: boolean;
  hideProperties?: boolean;
  showActions?: boolean;
  class?: string;
  children?: Snippet;
  headerContent?: Snippet;
  bodyContent?: Snippet;
}
