import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotSearchSuggestionItem } from '$stylist/control/interface/slot/search-suggestion-item';

export interface SlotSearchSuggestion
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
		SlotInteraction {
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
