import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { TimeRange as TimeRangeToken } from '../../tokens/information/date-time';

export type TimeRange = TimeRangeToken;

// Props for PerformanceDashboard component
export interface PerformanceDashboardProps {
  title?: string;
  subtitle?: string;
  metrics: Metric[];
  timeRange?: TimeRange;
  onTimeRangeChange?: (range: TimeRange) => void;
  showTimeRangeSelector?: boolean;
  class?: string;
  headerClass?: string;
  metricsClass?: string;
  metricCardClass?: string;
  variant?: 'default' | 'compact' | 'minimal';
  size?: ComponentSize;
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
