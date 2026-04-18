/**
 * WishlistButtonContract вЂ” РєРЅРѕРїРєР° РґРѕР±Р°РІР»РµРЅРёСЏ РІ РІРёС€Р»РёСЃС‚.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IClickable        (interaction) вЂ” disabled, loading, onClick
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BehaviorWishlistButtonEvents {
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: string) => void;
}
