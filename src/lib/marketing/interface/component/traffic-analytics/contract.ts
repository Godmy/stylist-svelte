import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface TrafficSourceData {
	id: string;
	name: string;
	value: number;
	percentage: number;
	color: string;
}

export interface TrafficDataPoint {
	date: Date;
	value: number;
}

export type TrafficAnalyticsContract = RecordArchitectureMerge<
	[
		{
			title?: string;
			subtitle?: string;
			totalVisitors: number;
			uniqueVisitors: number;
			pageViews: number;
			timeOnPage: string;
			bounceRate: number;
			trafficSources: TrafficSourceData[];
			trafficData: TrafficDataPoint[];
			timeRange?: '1d' | '7d' | '30d' | '90d' | '1y';
			onTimeRangeChange?: (range: '1d' | '7d' | '30d' | '90d' | '1y') => void;
			headerClass?: string;
			summaryClass?: string;
			chartClass?: string;
			sourcesClass?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
