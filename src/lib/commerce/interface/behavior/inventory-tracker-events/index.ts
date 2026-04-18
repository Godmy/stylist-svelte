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

export interface BehaviorInventoryTrackerEvents {
	onItemRestock?: (item: SlotInventoryItem) => void;
	onItemEdit?: (item: SlotInventoryItem) => void;
	onAlertAcknowledge?: (alertId: string) => void;
	onInventoryExport?: () => void;
}
