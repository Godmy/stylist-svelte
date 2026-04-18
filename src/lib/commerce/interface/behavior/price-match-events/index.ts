/**
 * PriceMatchContract вЂ” Р±Р»РѕРє СЃСЂР°РІРЅРµРЅРёСЏ С†РµРЅ СЃ РєРѕРЅРєСѓСЂРµРЅС‚Р°РјРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BehaviorPriceMatchEvents {
	onFindLower?: () => void;
}
