/**
 * PricingTableContract вЂ” С‚Р°Р±Р»РёС†Р° С‚Р°СЂРёС„РЅС‹С… РїР»Р°РЅРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotPricingPlan } from '$stylist/commerce/interface/slot/pricing-plan';

export interface RecipePricingTable extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** List of pricing plans */
	plans: SlotPricingPlan[];
}
