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
import type { BehaviorWishlistButtonEvents } from '$stylist/commerce/interface/behavior/wishlist-button-events';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';

export interface ContractWishlistButton
	extends StructIntersectAll<[
		BehaviorClickable,
		ThemeAttributes<HTMLButtonElement>
	]>, BehaviorWishlistButtonEvents {
	/** Is item in wishlist */
	inWishlist?: boolean;
	/** Show label */
	showLabel?: boolean;
	/** Button CSS class */
	buttonClass?: string;
}
