import type { RecipeSortableTableHeader } from '$stylist/table/interface/recipe/sortable-table-header';

export function createSortableTableHeaderState(props: RecipeSortableTableHeader) {
	const title = $derived(props.title);
	const sortKey = $derived(props.sortKey);
	const currentSortKey = $derived(props.currentSortKey);
	const currentSortDirection = $derived(props.currentSortDirection ?? null);

	const isCurrentSort = $derived(
		currentSortKey !== undefined && sortKey !== undefined && currentSortKey === sortKey
	);

	const sortDirection = $derived(isCurrentSort ? currentSortDirection : null);

	function handleClick() {
		if (sortKey) {
			props.onValueInput?.(sortKey);
			props.onValueChange?.(sortKey);
		}
	}

	return {
		get title() {
			return title;
		},
		get sortKey() {
			return sortKey;
		},
		get currentSortKey() {
			return currentSortKey;
		},
		get currentSortDirection() {
			return currentSortDirection;
		},
		get isCurrentSort() {
			return isCurrentSort;
		},
		get sortDirection() {
			return sortDirection;
		},
		handleClick
	};
}
