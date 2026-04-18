import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotSearchSuggestionItem } from '$stylist/control/interface/slot/search-suggestion-item';

export interface SlotSearchSuggestion
	extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
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
