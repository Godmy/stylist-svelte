export interface RecipeDomainSearchField {
	value?: string;
	placeholder?: string;
	onInput?: (value: string) => void;
	onEscape?: () => void;
	inputRef?: HTMLInputElement | null;
	class?: string;
}
