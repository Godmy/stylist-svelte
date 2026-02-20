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
  size?: 'sm' | 'md' | 'lg';
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

export type TimeRange = '1d' | '7d' | '30d' | '90d';