import type { RecipeFilterPills } from '$stylist/table/interface/recipe/filter-pills';

export function createFilterPillsState(props: RecipeFilterPills) {
	const isActive = (value: string) => (props.active ?? []).includes(value);
	const toggle = (value: string) => props.onToggle?.(props.columnKey, value);

	return {
		get options() { return props.options; },
		get label() { return props.label ?? props.columnKey; },
		isActive,
		toggle
	};
}
