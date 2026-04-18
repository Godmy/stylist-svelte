/**
 * ProductAvailabilityContract вЂ” РЅР°Р»РёС‡РёРµ С‚РѕРІР°СЂР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface RecipeProductAvailability extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** Is product available */
	available?: boolean;
	/** Stock quantity */
	stock?: number;
	/** SlotLocation info */
	location?: string;
	/** Estimated restock date */
	estimatedRestock?: string;
	/** Notify me callback */
	onNotifyMe?: () => void;
}
