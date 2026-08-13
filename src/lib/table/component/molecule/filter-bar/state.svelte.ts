import type { RecipeFilterBar } from '$stylist/table/interface/recipe/filter-bar';

export function createFilterBarState(props: RecipeFilterBar) {
	return {
		get searchValue() { return props.searchValue ?? ''; },
		get searchPlaceholder() { return props.searchPlaceholder ?? 'Search...'; },
		get pillGroups() { return props.pillGroups ?? []; }
	};
}
