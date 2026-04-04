import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SearchSuggestionItem {
	id: string;
	text: string;
	category?: string;
	icon?: string;
	count?: number;
}

export interface SearchSuggestionProps
	extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	suggestions: SearchSuggestionItem[];
	query?: string;
	loading?: boolean;
	class?: string;
	suggestionClass?: string;
	headerClass?: string;
	onValueInput?: (suggestion: SearchSuggestionItem) => void;
	onValueChange?: (suggestion: SearchSuggestionItem) => void;
	maxSuggestions?: number;
}
