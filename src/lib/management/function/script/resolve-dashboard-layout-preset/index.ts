import type { ContractDashboardLayout } from '$stylist/management/interface/contract/dashboard';
import { PRESET_LAYOUT_DASHBOARD } from '$stylist/management/const/preset/dashboard-layout';

export function resolveDashboardLayoutPreset(
	name: 'default' | 'compact' | 'spacious' | 'fixed-sidebar'
): ContractDashboardLayout {
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
