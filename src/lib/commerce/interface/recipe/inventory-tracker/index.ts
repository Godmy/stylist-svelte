import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotInventoryItem } from '$stylist/commerce/interface/slot/inventory-item';
import type { SlotLowStockAlert } from '$stylist/commerce/interface/slot/low-stock-alert';
import type { BehaviorInventoryTrackerEvents } from '$stylist/commerce/interface/behavior/inventory-tracker-events';

export interface RecipeInventoryTracker
	extends ComputeIntersectAll<[SlotTheme]>,
		BehaviorInventoryTrackerEvents {
	items: SlotInventoryItem[];

	alerts?: SlotLowStockAlert[];

	variant?: 'compact' | 'expanded' | 'dashboard';

	lowStockThreshold?: number;

	overStockThreshold?: number;

	showAlerts?: boolean;

	showAlertBadges?: boolean;

	showFilters?: boolean;

	showSearch?: boolean;

	showStatusFilter?: boolean;

	itemClass?: string;

	headerClass?: string;
}
