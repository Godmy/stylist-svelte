export interface SlotAdvancedInput {
	label?: string;
	value?: string;
	placeholder?: string;
	type?: string;
	disabled?: boolean;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	onInput?: (value: string) => void;
	class?: string;
}
