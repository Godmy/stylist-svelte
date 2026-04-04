/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { Snippet } from 'svelte';

export interface CanvasChartRecipe {
  width?: number;
  height?: number;
  data?: Array<Record<string, unknown>>;
  type?: 'line' | 'bar' | 'scatter' | 'area';
  title?: string;
  showGrid?: boolean;
  colors?: string[];
  class?: string;
  children?: Snippet;
}
