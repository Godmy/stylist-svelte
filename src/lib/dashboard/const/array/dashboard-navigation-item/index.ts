import { DASHBOARD_SCREEN_AUDIT_TREE } from '$stylist/dashboard/const/value/dashboard-screen-audit-tree';
import { DASHBOARD_SCREEN_ERROR_LIST } from '$stylist/dashboard/const/value/dashboard-screen-error-list';
import { DASHBOARD_SCREEN_INDEXATION } from '$stylist/dashboard/const/value/dashboard-screen-indexation';
import { DASHBOARD_SCREEN_PIPELINE_REPORTS } from '$stylist/dashboard/const/value/dashboard-screen-pipeline-reports';
import type { DashboardNavigationItem } from '$stylist/dashboard/type/object/dashboard-navigation-item';

export const DASHBOARD_NAVIGATION_ITEM = [
	{
		id: DASHBOARD_SCREEN_AUDIT_TREE,
		label: 'Audit Tree',
		description: 'Domain structure, violations and source files',
		status: 'unknown'
	},
	{
		id: DASHBOARD_SCREEN_PIPELINE_REPORTS,
		label: 'Pipeline Reports',
		description: 'Latest auditor, errors, indexation and DI runs',
		status: 'unknown'
	},
	{
		id: DASHBOARD_SCREEN_INDEXATION,
		label: 'Indexation',
		description: 'Generated barrel status and affected domains',
		status: 'unknown'
	},
	{
		id: DASHBOARD_SCREEN_ERROR_LIST,
		label: 'Error List',
		description: 'Unified TypeScript and Svelte diagnostics',
		status: 'unknown'
	}
] satisfies readonly DashboardNavigationItem[];
