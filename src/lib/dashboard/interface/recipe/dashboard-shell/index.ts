import type { DashboardScreen } from '$stylist/dashboard/type/alias/dashboard-screen';
import type { AuditTreeNode } from '$stylist/dashboard/type/struct/audit-tree-node';
import type { DashboardNavigationItem } from '$stylist/dashboard/type/struct/dashboard-navigation-item';
import type { DashboardPipelineStatus } from '$stylist/dashboard/type/struct/dashboard-pipeline-status';
import type { DashboardReportSummary } from '$stylist/dashboard/type/struct/dashboard-report-summary';
import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/struct/error-diagnostic-item';
import type { IndexationRunSummary } from '$stylist/dashboard/type/struct/indexation-run-summary';

export interface RecipeDashboardShell {
	activeScreen: DashboardScreen;
	navigationItems: DashboardNavigationItem[];
	pipelineStatus: DashboardPipelineStatus;
	auditTree: AuditTreeNode[];
	reports: DashboardReportSummary[];
	indexationSummary: IndexationRunSummary;
	errors: ErrorDiagnosticItem[];
	loadingByScreen?: Partial<Record<DashboardScreen, boolean>>;
	onScreenChange?: (screen: DashboardScreen) => void;
	onRefresh?: () => void;
	class?: string;
}
