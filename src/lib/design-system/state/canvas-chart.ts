import type { CanvasChartVariant, CanvasChartSize, ChartType } from '../props/canvas-chart';

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
  variant: CanvasChartVariant;

  /**
   * Default size
   * @default 'md'
   */
  size: CanvasChartSize;

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
