import type { DashboardLayoutPreset } from '$stylist/architecture/type/layout-dashboard';
import { PRESET_LAYOUT_DASHBOARD } from '$stylist/information/const/preset/layout/dashboard';

export function getDashboardLayoutPreset(
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
