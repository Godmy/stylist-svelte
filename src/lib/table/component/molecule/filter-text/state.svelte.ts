import type { RecipeFilterText } from '$stylist/table/interface/recipe/filter-text';

export function createFilterTextState(props: RecipeFilterText) {
	let value = $state(props.value ?? '');

	$effect(() => { value = props.value ?? ''; });

	const handleInput = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
		props.onSearch?.(value);
	};

	return {
		get value() { return value; },
		handleInput
	};
}
