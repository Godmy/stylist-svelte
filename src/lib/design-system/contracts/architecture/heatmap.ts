export interface IHeatmapCell {
  /** Unique identifier for the cell */
  id: string;
  /** Row name */
  row: string;
  /** Column name */
  column: string;
  /** Cell value */
  value: number;
  /** Cell color (optional) */
  color?: string;
  /** Cell description (optional) */
  description?: string;
}

export interface IExtendedHeatmapCell extends IHeatmapCell {
  /** X position on the chart */
  x: number;
  /** Y position on the chart */
  y: number;
  /** Cell width */
  width: number;
  /** Cell height */
  height: number;
  /** Cell color */
  color: string;
  /** Value intensity (from 0 to 1) */
  intensity: number;
}

export type THeatmapColorScheme = 'blue' | 'red' | 'green' | 'purple' | 'warm' | 'cool';

export interface IHeatmapProps {
  /** Data to display on the heatmap */
  data: IHeatmapCell[];
  /** Heatmap title */
  title?: string;
  /** Component width */
  width?: number;
  /** Component height */
  height?: number;
  /** Whether to show tooltips on hover */
  showTooltip?: boolean;
  /** Whether to show legend */
  showLegend?: boolean;
  /** Color scheme for display */
  colorScheme?: THeatmapColorScheme;
  /** Whether to show coordinate axes */
  showAxis?: boolean;
  /** Axis color */
  axisColor?: string;
  /** Padding inside the cell */
  cellPadding?: number;
  /** Handler for clicking on a cell */
  onCellClick?: (item: IHeatmapCell) => void;
  /** Additional CSS classes for the container */
  class?: string;
  /** Additional CSS classes for the chart area */
  chartClass?: string;
  /** Maximum value for color normalization (if not specified, will be calculated automatically) */
  maxValue?: number;
  /** Minimum value for color normalization */
  minValue?: number;
}