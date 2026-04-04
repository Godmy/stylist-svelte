import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordMarketingMerge } from '$stylist/marketing/type/record';

export interface TestResultData {
	id: string;
	testName: string;
	variantName: string;
	visitors: number;
	conversions: number;
	conversionRate: number;
	statisticalSignificance: number;
	improvement: number;
	status: 'winning' | 'losing' | 'inconclusive';
}

export interface TestOverviewData {
	testName: string;
	startDate: Date;
	endDate?: Date;
	status: 'running' | 'completed' | 'paused';
	winningVariant?: string;
	confidence: number;
}

export type TestResultsViewerContract = RecordArchitectureMerge<
	[
		{
			testResults: TestResultData[];
			testOverview: TestOverviewData;
			title?: string;
			description?: string;
			showCharts?: boolean;
			showStatisticalSignificance?: boolean;
			headerClass?: string;
			resultsClass?: string;
			chartClass?: string;
			footerClass?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
