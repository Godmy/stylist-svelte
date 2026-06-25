import type { RecipeCellIcon } from '$stylist/table/interface/recipe/cell-icon';

export function createCellIconState(props: RecipeCellIcon) {
	const icon = $derived(props.icon);
	const label = $derived(props.label ?? '');

	return {
		get icon() { return icon; },
		get label() { return label; }
	};
}

export default createCellIconState;
