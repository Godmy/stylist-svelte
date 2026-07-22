import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSearchSuggestionItem } from '$stylist/search/interface/slot/search-suggestion-item';

export interface SlotSearchSuggestion
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	suggestions: SlotSearchSuggestionItem[];
	query?: string;
	loading?: boolean;
	class?: string;
	suggestionClass?: string;
	headerClass?: string;
	onValueInput?: (suggestion: SlotSearchSuggestionItem) => void;
	onValueChange?: (suggestion: SlotSearchSuggestionItem) => void;
	maxSuggestions?: number;
}
