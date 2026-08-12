import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
export interface RecipePipelineReportList {
	reports: DashboardReportSummary[];
	activeReportId?: string;
	filter?: string;
	loading?: boolean;
	emptyLabel?: string;
	onSelect?: (report: DashboardReportSummary) => void;
	onOpenReport?: (report: DashboardReportSummary) => void;
	class?: string;
}
