import type { RecipeCellHeader } from '$stylist/table/interface/recipe/cell-header';
import { PresetCellHeader } from '$stylist/table/const/preset/cell-header';

export function createCellHeaderState(props: RecipeCellHeader) {
	const isCurrentSort = $derived(
		props.sortKey !== undefined && props.currentSortKey === props.sortKey
	);
	const sortDirection = $derived(isCurrentSort ? (props.currentSortDirection ?? null) : null);
	const sortIcon = $derived(
		isCurrentSort && sortDirection !== null && sortDirection !== 'none'
			? PresetCellHeader.ChevronUp
			: PresetCellHeader.ChevronsUpDown
	);

	function handleClick() {
		if (props.sortKey) {
			props.onValueInput?.(props.sortKey);
			props.onValueChange?.(props.sortKey);
		}
	}

	return {
		get isCurrentSort() { return isCurrentSort; },
		get sortDirection() { return sortDirection; },
		get sortIcon() { return sortIcon; },
		handleClick
	};
}
