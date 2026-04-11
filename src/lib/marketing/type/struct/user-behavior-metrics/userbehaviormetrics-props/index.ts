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
