import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMultiSelectOption } from '$stylist/control/interface/slot/multi-select-option';

export interface SlotMultiSelect extends HTMLAttributes<HTMLDivElement> {
	options: SlotMultiSelectOption[];
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
