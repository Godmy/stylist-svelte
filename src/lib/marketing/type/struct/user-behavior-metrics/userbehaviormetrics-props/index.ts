import type { InformationHTMLAttributes } from '$stylist/information';
import type { TimeRange } from '../timerange';
import type { UserBehaviorMetric } from '../userbehaviormetric';

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
