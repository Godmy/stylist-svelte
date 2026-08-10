import type { DashboardReportSummary } from '$stylist/dashboard/type/struct/dashboard-report-summary';
import type { IndexationRunSummary } from '$stylist/dashboard/type/struct/indexation-run-summary';

export interface RecipeIndexationPanel {
	summary: IndexationRunSummary;
	steps: DashboardReportSummary[];
	changedIndexes: string[];
	affectedDomains: string[];
	canRun?: boolean;
	running?: boolean;
	onRun?: () => void;
	onOpenOutput?: (path: string) => void;
	onSelectChangedFile?: (path: string) => void;
	class?: string;
}
