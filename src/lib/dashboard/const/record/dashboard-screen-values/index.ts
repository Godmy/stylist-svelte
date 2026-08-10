import { DASHBOARD_SCREEN_AUDIT_TREE } from '$stylist/dashboard/const/value/dashboard-screen-audit-tree';
import { DASHBOARD_SCREEN_ERROR_LIST } from '$stylist/dashboard/const/value/dashboard-screen-error-list';
import { DASHBOARD_SCREEN_INDEXATION } from '$stylist/dashboard/const/value/dashboard-screen-indexation';
import { DASHBOARD_SCREEN_PIPELINE_REPORTS } from '$stylist/dashboard/const/value/dashboard-screen-pipeline-reports';

export const DASHBOARD_SCREEN_VALUES = [
	DASHBOARD_SCREEN_AUDIT_TREE,
	DASHBOARD_SCREEN_PIPELINE_REPORTS,
	DASHBOARD_SCREEN_INDEXATION,
	DASHBOARD_SCREEN_ERROR_LIST
] as const;
