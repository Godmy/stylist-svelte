import type { ComboboxItem } from '../combobox/item';

export type ComboboxProps = {
	id: string;
	items: ComboboxItem[];
	value?: string | null;
	label?: string;
	description?: string;
	placeholder?: string;
	emptyText?: string;
	disabled?: boolean;
	clearable?: boolean;
	loading?: boolean;
	class?: string;
};
