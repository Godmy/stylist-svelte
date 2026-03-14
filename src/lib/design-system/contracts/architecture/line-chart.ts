import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { LineChartVariant } from '$stylist/design-system/tokens/interaction/variants';

import type { LineChartData, LineChartPoint } from '../../types/architecture/line-chart';
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


