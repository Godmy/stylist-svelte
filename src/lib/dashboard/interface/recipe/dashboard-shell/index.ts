import type { DashboardScreen } from '$stylist/dashboard/type/alias/dashboard-screen';
import type { AuditTreeNode } from '$stylist/dashboard/type/object/audit-tree-node';
import type { DashboardNavigationItem } from '$stylist/dashboard/type/object/dashboard-navigation-item';
import type { DashboardPipelineStatus } from '$stylist/dashboard/type/object/dashboard-pipeline-status';
import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/object/error-diagnostic-item';
import type { IndexationRunSummary } from '$stylist/dashboard/type/object/indexation-run-summary';
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
