/**
 * ProductWishlistContract вЂ” СЃРїРёСЃРѕРє Р¶РµР»Р°РЅРёР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BehaviorProductWishlistEvents {
	onRemove?: (id: string) => void;
	onMoveToCart?: (id: string) => void;
}
