export interface BehaviorProductSearchEvents {
	onSearch?: (query: string) => void;
	onSuggestionSelect?: (suggestion: string) => void;
}
