/**
 * ProductSortingContract вЂ” СЃРѕСЂС‚РёСЂРѕРІРєР° СЃРїРёСЃРєР° С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';
import type { SlotProductSortingOption } from '$stylist/commerce/interface/slot/product-sorting-option';

export interface RecipeProductSorting extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]> {
	/** List of sorting options */
	options?: SlotProductSortingOption[];
	/** Current selected value */
	value?: string;
	/** Children slot */
	children?: Snippet;
	/** Input event handler */
	oninput?: (event: Event) => void;
	/** Change event handler */
	onchange?: (event: Event) => void;
}
