import type { DashboardScreen } from '$stylist/dashboard/type/alias/dashboard-screen';
import type { DashboardNavigationItem } from '$stylist/dashboard/type/struct/dashboard-navigation-item';

export interface SlotDashboardNavigation {
	items: DashboardNavigationItem[];
	activeScreen: DashboardScreen;
	collapsed?: boolean;
	onSelect?: (screen: DashboardScreen) => void;
	class?: string;
}
