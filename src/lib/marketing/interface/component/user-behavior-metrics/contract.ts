import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordMarketingMerge } from '$stylist/marketing/type/record';

export interface UserBehaviorMetricData {
	id: string;
	name: string;
	value: string | number;
	previousValue?: string | number;
	change?: number;
	changeType?: 'positive' | 'negative';
	description: string;
}

export type UserBehaviorMetricsContract = RecordArchitectureMerge<
	[
		{
			title?: string;
			subtitle?: string;
			metrics: UserBehaviorMetricData[];
			timeRange?: '1d' | '7d' | '30d' | '90d';
			onTimeRangeChange?: (range: '1d' | '7d' | '30d' | '90d') => void;
			headerClass?: string;
			metricsClass?: string;
			metricCardClass?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
