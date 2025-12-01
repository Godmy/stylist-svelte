export type ChartDataPoint = {
  id: string;
  name: string;
  value: number;
  color?: string;
  description?: string;
};

export type LineChartData = {
  id: string;
  label: string;
  data: ChartDataPoint[];
  color?: string;
};

export type LineChartVariant = 'default' | 'minimal' | 'elegant' | 'bold';
export type LineChartSize = 'sm' | 'md' | 'lg';

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
  onPointClick?: (item: ChartDataPoint, series: LineChartData) => void;
  variant?: LineChartVariant;
  size?: LineChartSize;
  class?: string;
  chartClass?: string;
}