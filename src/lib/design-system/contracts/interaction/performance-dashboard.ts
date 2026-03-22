import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenTimeRange } from '$stylist/design-system/tokens/information/time-range';
// Props for PerformanceDashboard component
export interface PerformanceDashboardProps {
  title?: string;
  subtitle?: string;
  metrics: Metric[];
  timeRange?: TokenTimeRange;
  onTimeRangeChange?: (range: TokenTimeRange) => void;
  showTimeRangeSelector?: boolean;
  class?: string;
  headerClass?: string;
  metricsClass?: string;
  metricCardClass?: string;
  variant?: 'default' | 'compact' | 'minimal';
  size?: TokenSize;
}

export interface Metric {
  id: string;
  title: string;
  value: string | number;
  change: number; // Percentage change
  changeType: 'positive' | 'negative';
  icon: any;
  color: string;
}





