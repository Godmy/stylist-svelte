import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface MultiSelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface MultiSelectProps extends InteractionHTMLAttributes<HTMLDivElement> {
	options: MultiSelectOption[];
	value?: string[];
	placeholder?: string;
	disabled?: boolean;
	searchable?: boolean;
	maxSelections?: number;
	class?: string;
	dropdownClass?: string;
	selectedClass?: string;
	optionClass?: string;
	placeholderClass?: string;
	searchInputClass?: string;
	onInput?: (value: string[]) => void;
	onChange?: (value: string[]) => void;
}
