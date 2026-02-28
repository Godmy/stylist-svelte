import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

export type LineChartPoint = {
  id: string;
  name: string;
  value: number;
  color?: string;
  description?: string;
};

export type LineChartData = {
  id: string;
  label: string;
  data: LineChartPoint[];
  color?: string;
};

export type LineChartVariant = 'default' | 'minimal' | 'elegant' | 'bold';

export interface ILineChartProps {
  data: LineChartData[];
  title?: string;
  width?: number;
  height?: number;
  showTooltip?: boolean;
  showLegend?: boolean;
  colorScheme?: 'default' | 'warm' | 'cool' | 'neutral';
  maxValue?: number;
  showAxis?: boolean;
  axisColor?: string;
  smooth?: boolean;
  strokeWidth?: number;
  onPointClick?: (item: LineChartPoint, series: LineChartData) => void;
  variant?: LineChartVariant;
  size?: ComponentSize;
  class?: string;
  chartClass?: string;
}