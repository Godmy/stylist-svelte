export type TrafficAnalyticsProps = {
  title?: string;
  subtitle?: string;
  totalVisitors: number;
  uniqueVisitors: number;
  pageViews: number;
  timeOnPage: string;
  bounceRate: number;
  trafficSources: TrafficSource[];
  trafficData: TrafficDataPoint[];
  timeRange?: TimeRange;
  onTimeRangeChange?: (range: TimeRange) => void;
  class?: string;
  headerClass?: string;
  summaryClass?: string;
  chartClass?: string;
  sourcesClass?: string;
} & InformationHTMLAttributes<HTMLDivElement>;
