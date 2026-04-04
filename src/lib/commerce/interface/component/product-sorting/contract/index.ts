/**
 * ProductSortingContract — сортировка списка товаров.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';

export interface ProductSortingOptionContract {
	value: string;
	label: string;
}

export interface ProductSortingContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {
	/** List of sorting options */
	options?: ProductSortingOptionContract[];
	/** Current selected value */
	value?: string;
	/** Children slot */
	children?: Snippet;
	/** Input event handler */
	oninput?: (event: Event) => void;
	/** Change event handler */
	onchange?: (event: Event) => void;
}
