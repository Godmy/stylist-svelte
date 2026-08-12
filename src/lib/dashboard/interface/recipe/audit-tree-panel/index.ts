import type { AuditTreeNode } from '$stylist/dashboard/type/object/audit-tree-node';
import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
export interface RecipeAuditTreePanel {
	nodes: AuditTreeNode[];
	summary: DashboardReportSummary;
	selectedNodeId?: string;
	severityFilter?: 'all' | 'ok' | 'warning' | 'error' | 'stale' | 'unknown';
	domainFilter?: string;
	loading?: boolean;
	onSelectNode?: (node: AuditTreeNode) => void;
	onSeverityFilterChange?: (severity: 'all' | 'ok' | 'warning' | 'error' | 'stale' | 'unknown') => void;
	onDomainFilterChange?: (domain: string) => void;
	class?: string;
}
