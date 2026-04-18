/**
 * ProductReviewsContract вЂ” РѕС‚Р·С‹РІС‹ Рѕ С‚РѕРІР°СЂРµ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotReview {
	id: string;
	author: string;
	rating: number;
	title: string;
	content: string;
	date: string;
	verified?: boolean;
}
