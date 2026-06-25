import type { CheckboxGroupOption } from '$stylist/control/type/struct/checkbox-group-option';
import type { CheckboxGroupRestProps } from '$stylist/control/type/struct/checkbox-group-rest-props';

export type CheckboxGroupProps = CheckboxGroupRestProps & {
	options: CheckboxGroupOption[];
	value?: string[];
	label?: string;
	description?: string;
	class?: string;
	itemClass?: string;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	onValueInput?: (values: string[]) => void;
	onValueChange?: (values: string[]) => void;
	onInput?: (values: string[]) => void;
	onChange?: (values: string[]) => void;
};
