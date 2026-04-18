/**
 * ProductTourContract вЂ” РёРЅС‚РµСЂР°РєС‚РёРІРЅС‹Р№ С‚СѓСЂ РїРѕ РїСЂРѕРґСѓРєС‚Сѓ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotProductTourStep {
	title: string;
	content: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
}
