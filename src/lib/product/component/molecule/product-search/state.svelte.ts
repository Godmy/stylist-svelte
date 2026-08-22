import { ClassNamesManager } from '$stylist/layout/class/manager/class-names';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeProductSearch } from '$stylist/product/interface/recipe/product-search';

export function createProductSearchState(
	props: RecipeProductSearch & HTMLAttributes<HTMLDivElement>
) {
	let query = $state('');
	let showSuggestions = $state(false);

	const rootClasses = $derived(ClassNamesManager.merge('product-search', props.class));
	const suggestionVisible = $derived(
		showSuggestions && query.length > 0 && (props.suggestions?.length ?? 0) > 0
	);

	function handleInput(value: string) {
		query = value;
		showSuggestions = value.length > 0 && (props.suggestions?.length ?? 0) > 0;
	}

	function handleSearch() {
		props.onSearch?.(query);
		showSuggestions = false;
	}

	function selectSuggestion(suggestion: string) {
		query = suggestion;
		props.onSuggestionSelect?.(suggestion);
		showSuggestions = false;
	}

	return {
		get rootClasses() {
			return rootClasses;
		},
		get query() {
			return query;
		},
		set query(value: string) {
			query = value;
		},
		get showSuggestions() {
			return suggestionVisible;
		},
		handleInput,
		handleSearch,
		selectSuggestion
	};
}

export default createProductSearchState;
