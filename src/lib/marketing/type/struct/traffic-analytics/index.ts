import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type TrafficSource = {
  id: string;
  name: string;
  value: number;
  percentage: number;
  color: string;
};

export type TrafficDataPoint = {
  date: Date;
  value: number;
};

export type TimeRange = '1d' | '7d' | '30d' | '90d' | '1y';

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
