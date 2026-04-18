/**
 * InventoryTrackerContract вЂ” С‚СЂРµРєРµСЂ СЃРєР»Р°РґСЃРєРёС… РѕСЃС‚Р°С‚РєРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 *
 * РџСЂРёРјРµС‡Р°РЅРёРµ: variant Р·РґРµСЃСЊ вЂ” layout-СЂРµР¶РёРј (compact/expanded/dashboard),
 * РЅРµ С‚РµРјР°С‚РёС‡РµСЃРєРёР№ ThemeVariant. РћСЃС‚Р°РІР»РµРЅ inline.
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotInventoryItem } from '$stylist/commerce/interface/slot/inventory-item';
import type { SlotLowStockAlert } from '$stylist/commerce/interface/slot/low-stock-alert';
import type { BehaviorInventoryTrackerEvents } from '$stylist/commerce/interface/behavior/inventory-tracker-events';

export interface RecipeInventoryTracker extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorInventoryTrackerEvents {
	/** List of inventory items */
	items: SlotInventoryItem[];
	/** List of low stock alerts */
	alerts?: SlotLowStockAlert[];
	/** Layout variant (compact / expanded / dashboard) */
	variant?: 'compact' | 'expanded' | 'dashboard';
	/** Low stock threshold */
	lowStockThreshold?: number;
	/** Over stock threshold */
	overStockThreshold?: number;
	/** Show alerts section */
	showAlerts?: boolean;
	/** Show alert badges */
	showAlertBadges?: boolean;
	/** Show filters */
	showFilters?: boolean;
	/** Show search */
	showSearch?: boolean;
	/** Show status filter */
	showStatusFilter?: boolean;
	/** Additional CSS class for items */
	itemClass?: string;
	/** Additional CSS class for header */
	headerClass?: string;
}
