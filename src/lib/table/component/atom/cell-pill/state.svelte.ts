import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeCellPill } from '$stylist/table/interface/recipe/cell-pill';

export function createCellPillState(props: RecipeCellPill & HTMLAttributes<HTMLTableCellElement>) {
	const value = $derived(props.value ?? '');
	const variant = $derived(props.variant ?? 'default');

	return {
		get value() { return value; },
		get variant() { return variant; }
	};
}
