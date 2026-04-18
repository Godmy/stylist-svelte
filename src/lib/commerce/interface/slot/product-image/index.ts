/**
 * ProductGalleryContract вЂ” РіР°Р»РµСЂРµСЏ РёР·РѕР±СЂР°Р¶РµРЅРёР№ С‚РѕРІР°СЂР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotProductImage {
	src: string;
	alt?: string;
}
