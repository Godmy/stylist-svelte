import type { InformationHTMLAttributes } from '$stylist/information';
import type { TimeRange } from '../timerange';
import type { TrafficDataPoint } from '../trafficdatapoint';
import type { TrafficSource } from '../trafficsource';

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
