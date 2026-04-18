/**
 * ProductGalleryContract вЂ” РіР°Р»РµСЂРµСЏ РёР·РѕР±СЂР°Р¶РµРЅРёР№ С‚РѕРІР°СЂР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface RecipeProductGallery extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** List of image URLs */
	images: string[];
	/** Main image URL */
	mainImage?: string;
	/** Callback when image changes */
	onImageChange?: (image: string) => void;
}
