/**
 * ReturnPolicyContract вЂ” РїРѕР»РёС‚РёРєР° РІРѕР·РІСЂР°С‚Р° С‚РѕРІР°СЂР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SlotReturnStep {
	id: string;
	title: string;
	description: string;
	icon: any;
}
