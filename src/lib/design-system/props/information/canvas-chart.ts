import type { HTMLCanvasAttributes } from 'svelte/elements';

/**
 * CanvasChart type options
 * @description The type of chart to render
 */
export type ChartType = 'line' | 'bar' | 'pie';

/**
 * CanvasChart variant options
 * @description Visual style variant for the chart
 */
export type CanvasChartVariant = 'default' | 'minimal' | 'elegant' | 'bold';

/**
 * CanvasChart size options
 * @description Size preset for the chart
 */
export type CanvasChartSize = 'sm' | 'md' | 'lg';

/**
 * CanvasChart data point interface
 * @description Single data point for chart rendering
 */
export interface ChartDataPoint {
  /**
   * X-axis value (can be numeric or string label)
   */
  x: number | string;

  /**
   * Y-axis value (numeric)
   */
  y: number;

  /**
   * Optional label for the data point
   */
  label?: string;

  /**
   * Optional color for the data point
   */
  color?: string;
}

/**
 * CanvasChart props interface
 * @description Properties for configuring the canvas chart component
 */
export interface CanvasChartProps extends HTMLCanvasAttributes {
  /**
   * Width of the chart in pixels
   * @default 800
   */
  width?: number;

  /**
   * Height of the chart in pixels
   * @default 600
   */
  height?: number;

  /**
   * Array of data points to render
   * @required
   */
  data: ChartDataPoint[];

  /**
   * Type of chart to render
   * @default 'line'
   */
  type?: ChartType;

  /**
   * Chart title displayed at the top
   * @default ''
   */
  title?: string;

  /**
   * Label for the X-axis
   * @default ''
   */
  xAxisLabel?: string;

  /**
   * Label for the Y-axis
   * @default ''
   */
  yAxisLabel?: string;

  /**
   * Show grid lines on the chart
   * @default true
   */
  showGrid?: boolean;

  /**
   * Array of colors to use for chart elements
   * @default ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']
   */
  colors?: string[];

  /**
   * Visual variant of the chart
   * @default 'default'
   */
  variant?: CanvasChartVariant;

  /**
   * Size preset of the chart
   * @default 'md'
   */
  size?: CanvasChartSize;

  /**
   * Show legend below the chart
   * @default true
   */
  showLegend?: boolean;

  /**
   * Show tooltip on hover
   * @default true
   */
  showTooltip?: boolean;

  /**
   * Callback fired when a data point is clicked
   * @param point - The clicked data point
   */
  onPointClick?: (point: ChartDataPoint) => void;

  /**
   * Callback fired when a data point is hovered
   * @param point - The hovered data point
   */
  onPointHover?: (point: ChartDataPoint) => void;
}

/**
 * CanvasChart state interface
 * @description Internal state management for the canvas chart
 */
export interface CanvasChartState {
  isRendering: boolean;
  hoveredPoint: ChartDataPoint | null;
  selectedPoint: ChartDataPoint | null;
  currentVariant: CanvasChartVariant;
  currentSize: CanvasChartSize;
}
