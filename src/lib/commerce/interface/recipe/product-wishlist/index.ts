/**
 * ProductWishlistContract вЂ” СЃРїРёСЃРѕРє Р¶РµР»Р°РЅРёР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotWishlistItem } from '$stylist/commerce/interface/slot/wishlist-item';
import type { BehaviorProductWishlistEvents } from '$stylist/commerce/interface/behavior/product-wishlist-events';

export interface RecipeProductWishlist extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorProductWishlistEvents {
	/** List of wishlist items */
	items: SlotWishlistItem[];
}
