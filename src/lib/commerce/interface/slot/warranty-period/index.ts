/**
 * WarrantyInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РіР°СЂР°РЅС‚РёРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { WarrantyPeriodType } from '$stylist/commerce/type/struct/warranty-period-type';

export interface SlotWarrantyPeriod {
	type: WarrantyPeriodType;
	duration: number;
	description?: string;
	coverage?: string[];
	exclusions?: string[];
}
