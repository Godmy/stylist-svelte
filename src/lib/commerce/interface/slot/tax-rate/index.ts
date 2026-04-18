/**
 * TaxCalculatorContract вЂ” РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ РЅР°Р»РѕРіРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotTaxRate {
	id: string;
	name: string;
	rate: number;
	description?: string;
	compound?: boolean;
}
