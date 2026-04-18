import { SearchSuggestionStyleManager } from '$stylist/control/class/style-manager/search-suggestion';
import type { SlotSearchSuggestion as SearchSuggestionProps } from '$stylist/control/interface/slot/search-suggestion';

export function createSearchSuggestionState(props: SearchSuggestionProps) {
	let displayedSuggestions = $derived((props.suggestions ?? []).slice(0, props.maxSuggestions ?? 5));
	let rootClass = $derived(SearchSuggestionStyleManager.root(props.class ?? ''));
	let buttonClass = $derived(SearchSuggestionStyleManager.button(props.suggestionClass ?? ''));

	return {
		get displayedSuggestions() { return displayedSuggestions; },
		get rootClass() { return rootClass; },
		get buttonClass() { return buttonClass; },
		handleSuggestionClick(suggestion: SearchSuggestionProps['suggestions'][number]) {
			props.onValueInput?.(suggestion);
			props.onValueChange?.(suggestion);
		}
	};
}

export default createSearchSuggestionState;
