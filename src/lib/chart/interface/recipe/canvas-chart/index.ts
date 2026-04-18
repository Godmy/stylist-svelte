import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { Snippet } from 'svelte';

export interface CanvasChartRecipe extends StructIntersectAll<[]> {
  width?: number;
  height?: number;
  data?: Array<Record<string, unknown>>;
  type?: 'line' | 'bar' | 'scatter' | 'area';
  variant?: 'default' | 'minimal' | 'bold' | 'small' | 'large';
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  colors?: string[];
  class?: string;
  children?: Snippet;
}
