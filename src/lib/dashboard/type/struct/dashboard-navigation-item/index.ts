import type { DashboardScreen } from '$stylist/dashboard/type/alias/dashboard-screen';

export type DashboardNavigationItem = {
	id: DashboardScreen;
	label: string;
	description: string;
	status: 'ok' | 'warning' | 'error' | 'running' | 'stale' | 'unknown';
	disabled?: boolean;
};
