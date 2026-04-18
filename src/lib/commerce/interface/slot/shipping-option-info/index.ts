/**
 * ShippingInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РґРѕСЃС‚Р°РІРєРµ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotShippingOptionInfo {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: number;
	available?: boolean;
	disabled?: boolean;
	cutoffTime?: string;
	carrier?: string;
	trackingAvailable?: boolean;
	signatureRequired?: boolean;
	insurance?: boolean;
	carbonNeutral?: boolean;
}
