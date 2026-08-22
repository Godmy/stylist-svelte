import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotInventoryItem } from '$stylist/commerce/interface/slot/inventory-item';
export interface RecipeInventoryTracker extends ComputeIntersectAll<[SlotTheme]> {
	onItemRestock?: (item: SlotInventoryItem) => void;
	onItemEdit?: (item: SlotInventoryItem) => void;
	onAlertAcknowledge?: (alertId: string) => void;
	onInventoryExport?: () => void;

	items: SlotInventoryItem[];

	alerts?: {
		id: string;
		itemId: string;
		itemName: string;
		threshold: number;
		currentLevel: number;
		date: Date;
		acknowledged?: boolean;
	}[];

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
