import type { ProductSearchRecipe } from '$stylist/commerce/interface/recipe/product-search';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createProductSearchState(props: ProductSearchRecipe) {
	let query = $state('');
	let showSuggestions = $state(false);

	const rootClasses = $derived(mergeClassNames(props.class));
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
		get query() {
			return query;
		},
		set query(value: string) {
			query = value;
		},
		get rootClasses() {
			return rootClasses;
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
