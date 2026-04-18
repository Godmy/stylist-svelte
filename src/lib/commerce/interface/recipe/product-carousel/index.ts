/**
 * ProductCarouselContract вЂ” РєР°СЂСѓСЃРµР»СЊ С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotProductCarouselItem } from '$stylist/commerce/interface/slot/product-carousel-item';

export interface RecipeProductCarousel extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** List of products to display */
	products: SlotProductCarouselItem[];
}
