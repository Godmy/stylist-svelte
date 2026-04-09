export interface SearchBarStateProps {
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	debounceMs?: number;
	class?: string;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	onSearch?: (value: string) => void;
	onClear?: () => void;
}
