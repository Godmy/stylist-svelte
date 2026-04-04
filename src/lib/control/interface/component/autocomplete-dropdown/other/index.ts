export interface AutocompleteDropdownOption {
	label: string;
	value: string;
}

export interface AutocompleteDropdownProps {
	options: AutocompleteDropdownOption[];
	value?: string;
	placeholder?: string;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	onChange?: (value: string) => void;
	class?: string;
}
