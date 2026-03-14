import type { DashboardLayoutPreset } from '../../contracts/architecture/dashboard-layout';

export const DASHBOARD_LAYOUT_PRESET: DashboardLayoutPreset = {
	sidebarOpen: true,
	collapsibleSidebar: true,
	showSidebarToggle: true,
	variant: 'default',
	mobileBreakpoint: 'lg'
};

export const DASHBOARD_LAYOUT_COMPACT_PRESET: DashboardLayoutPreset = {
	...DASHBOARD_LAYOUT_PRESET,
	variant: 'compact'
};

export const DASHBOARD_LAYOUT_SPACIOUS_PRESET: DashboardLayoutPreset = {
	...DASHBOARD_LAYOUT_PRESET,
	variant: 'spacious'
};

export const DASHBOARD_LAYOUT_FIXED_SIDEBAR_PRESET: DashboardLayoutPreset = {
	...DASHBOARD_LAYOUT_PRESET,
	collapsibleSidebar: false,
	showSidebarToggle: false
};

export function getDashboardLayoutPreset(
	name: 'default' | 'compact' | 'spacious' | 'fixed-sidebar'
): DashboardLayoutPreset {
	switch (name) {
		case 'compact':
			return DASHBOARD_LAYOUT_COMPACT_PRESET;
		case 'spacious':
			return DASHBOARD_LAYOUT_SPACIOUS_PRESET;
		case 'fixed-sidebar':
			return DASHBOARD_LAYOUT_FIXED_SIDEBAR_PRESET;
		case 'default':
		default:
			return DASHBOARD_LAYOUT_PRESET;
	}
}
