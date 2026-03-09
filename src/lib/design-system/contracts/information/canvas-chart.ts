import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { ChartType } from '$stylist/design-system/tokens/architecture/chart-types';
import type { LineChartVariant } from '$stylist/design-system/tokens/architecture/line-chart-variants';
import type { HTMLCanvasAttributes } from 'svelte/elements';

/**
 * CanvasChart type options
 * @description The type of chart to render
 */
/**
 * CanvasChart variant options
 * @description Visual style variant for the chart
 */

/**
 * CanvasChart size options
 * @description Size preset for the chart
 */

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
  variant?: LineChartVariant;

  /**
   * Size preset of the chart
   * @default 'md'
   */
  size?: ComponentSize;

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
  currentVariant: LineChartVariant;
  currentSize?: ComponentSize;
}

// Presets moved from presets\canvas-chart.ts

/**
 * CanvasChart preset interface
 * @description Default configuration for canvas chart component
 */
export interface CanvasChartPreset {
  /**
   * Default width in pixels
   * @default 800
   */
  width: number;

  /**
   * Default height in pixels
   * @default 600
   */
  height: number;

  /**
   * Default chart type
   * @default 'line'
   */
  type: ChartType;

  /**
   * Default variant
   * @default 'default'
   */
  variant: LineChartVariant;

  /**
   * Default size
   * @default 'md'
   */
  size?: ComponentSize;

  /**
   * Default show grid state
   * @default true
   */
  showGrid: boolean;

  /**
   * Default show legend state
   * @default true
   */
  showLegend: boolean;

  /**
   * Default show tooltip state
   * @default true
   */
  showTooltip: boolean;

  /**
   * Default colors array
   * @default ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']
   */
  colors: string[];
}

/**
 * Default preset for CanvasChart component
 * @description Standard configuration for canvas chart
 */
export const CANVAS_CHART_PRESET: CanvasChartPreset = {
  width: 800,
  height: 600,
  type: 'line',
  variant: 'default',
  size: 'md',
  showGrid: true,
  showLegend: true,
  showTooltip: true,
  colors: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6']
};

/**
 * Minimal preset for CanvasChart component
 * @description Minimal configuration with reduced visual elements
 */
export const CANVAS_CHART_MINIMAL_PRESET: CanvasChartPreset = {
  ...CANVAS_CHART_PRESET,
  variant: 'minimal',
  showGrid: false
};

/**
 * Bold preset for CanvasChart component
 * @description Bold configuration with enhanced visual elements
 */
export const CANVAS_CHART_BOLD_PRESET: CanvasChartPreset = {
  ...CANVAS_CHART_PRESET,
  variant: 'bold',
  size: 'lg'
};

/**
 * Small preset for CanvasChart component
 * @description Small size configuration
 */
export const CANVAS_CHART_SMALL_PRESET: CanvasChartPreset = {
  ...CANVAS_CHART_PRESET,
  size: 'sm',
  width: 400,
  height: 300
};

/**
 * Large preset for CanvasChart component
 * @description Large size configuration
 */
export const CANVAS_CHART_LARGE_PRESET: CanvasChartPreset = {
  ...CANVAS_CHART_PRESET,
  size: 'lg',
  width: 1200,
  height: 800
};

/**
 * Get preset by name
 * @param name - Name of the preset
 * @returns The preset configuration
 */
export function getCanvasChartPreset(
  name: 'default' | 'minimal' | 'bold' | 'small' | 'large'
): CanvasChartPreset {
  switch (name) {
    case 'minimal':
      return CANVAS_CHART_MINIMAL_PRESET;
    case 'bold':
      return CANVAS_CHART_BOLD_PRESET;
    case 'small':
      return CANVAS_CHART_SMALL_PRESET;
    case 'large':
      return CANVAS_CHART_LARGE_PRESET;
    case 'default':
    default:
      return CANVAS_CHART_PRESET;
  }
}





