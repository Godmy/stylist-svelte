import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
export interface SlotDashboardPanel {
	title: string;
	description?: string;
	summary?: DashboardReportSummary;
	loading?: boolean;
	empty?: boolean;
	class?: string;
}
