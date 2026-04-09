import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type UserBehaviorMetric = {
  id: string;
  name: string;
  value: string | number;
  previousValue?: string | number;
  change?: number;
  changeType?: 'positive' | 'negative';
  description: string;
};

export type TimeRange = '1d' | '7d' | '30d' | '90d';

export type UserBehaviorMetricsProps = {
  title?: string;
  subtitle?: string;
  metrics: UserBehaviorMetric[];
  timeRange?: TimeRange;
  onTimeRangeChange?: (range: TimeRange) => void;
  class?: string;
  headerClass?: string;
  metricsClass?: string;
  metricCardClass?: string;
} & InformationHTMLAttributes<HTMLDivElement>;
