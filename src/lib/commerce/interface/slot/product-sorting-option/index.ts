/**
 * ProductSortingContract вЂ” СЃРѕСЂС‚РёСЂРѕРІРєР° СЃРїРёСЃРєР° С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';

export interface SlotProductSortingOption {
	value: string;
	label: string;
}
