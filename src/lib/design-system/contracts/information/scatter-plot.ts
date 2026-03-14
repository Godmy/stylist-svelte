import type { HTMLAttributes } from 'svelte/elements';

import type { ScatterPlotDataPoint } from '../../types/information/scatter-plot';
export interface ScatterPlotProps extends HTMLAttributes<HTMLDivElement> {
  data: ScatterPlotDataPoint[];
  title?: string;
  width?: number;
  height?: number;
  showLegend?: boolean;
  colorScheme?: 'default' | 'warm' | 'cool';
  showAxis?: boolean;
  showGrid?: boolean;
  pointSize?: number;
  showLabels?: boolean;
  class?: string;
  onPointClick?: (item: ScatterPlotDataPoint) => void;
}


