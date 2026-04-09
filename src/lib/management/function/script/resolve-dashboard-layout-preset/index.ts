import type { DashboardLayoutPreset } from '$stylist/management/interface/contract-dashboard-layout';
import { PRESET_LAYOUT_DASHBOARD } from '$stylist/management/const/struct/dashboard-layout';

export function resolveDashboardLayoutPreset(
	name: 'default' | 'compact' | 'spacious' | 'fixed-sidebar'
): DashboardLayoutPreset {
	switch (name) {
		case 'compact':
			return {
				...PRESET_LAYOUT_DASHBOARD,
				variant: 'compact'
			};
		case 'spacious':
			return {
				...PRESET_LAYOUT_DASHBOARD,
				variant: 'spacious'
			};
		case 'fixed-sidebar':
			return {
				...PRESET_LAYOUT_DASHBOARD,
				collapsibleSidebar: false,
				showSidebarToggle: false
			};
		case 'default':
		default:
			return PRESET_LAYOUT_DASHBOARD;
	}
}
