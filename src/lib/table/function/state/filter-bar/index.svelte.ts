import type { SlotFilterBar } from '$stylist/table/interface/slot/filter-bar';

export function createFilterBarState(props: SlotFilterBar) {
	return {
		get searchValue() { return props.searchValue ?? ''; },
		get searchPlaceholder() { return props.searchPlaceholder ?? 'Search...'; },
		get pillGroups() { return props.pillGroups ?? []; }
	};
}

export default createFilterBarState;
