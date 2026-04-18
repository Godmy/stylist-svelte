/**
 * DiscountApplierContract вЂ” РїСЂРёРјРµРЅРµРЅРёРµ СЃРєРёРґРѕРє Рё РїСЂРѕРјРѕРєРѕРґРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { DiscountType } from '$stylist/commerce/type/struct/discount-type';

export interface SlotDiscountRule {
	id: string;
	code: string;
	type: DiscountType;
	value: number;
	name: string;
	description?: string;
	minOrderAmount?: number;
	maxDiscountAmount?: number;
	startDate?: Date;
	endDate?: Date;
	usageLimit?: number;
	usedCount?: number;
	appliesTo?: 'all' | 'specific_products' | 'specific_categories';
	applicableItems?: string[];
}
