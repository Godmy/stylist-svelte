import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';

export type DashboardPipelineStatus = {
	status: 'ok' | 'warning' | 'error' | 'running' | 'stale' | 'unknown';
	updatedAt?: string;
	errorCount: number;
	warningCount: number;
	totalFiles: number;
	steps: DashboardReportSummary[];
};
