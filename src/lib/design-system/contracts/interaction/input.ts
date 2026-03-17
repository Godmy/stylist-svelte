import type { HTMLInputAttributes, HTMLTextareaAttributes, HTMLAttributes } from 'svelte/elements';

import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { AppearanceStyle } from '$stylist/design-system/tokens/interaction/variants';
import type { DefaultVariants } from '$stylist/design-system/tokens/interaction/variants';
import type { InputVariant } from '$stylist/design-system/tokens/interaction/variants';
import type {
	ChildrenProp,
	ClassProp,
	ContentProp,
	HtmlAttributesBase,
	InputAttributesBase,
	InputFieldBaseProps,
	InputFieldRequiredProps,
	InputLabelProps,
	InputValidationProps,
	InputValueProps,
	TextInputBaseProps
} from '../information/common';
import type { InputAddonPosition } from '$stylist/design-system/tokens/interaction/horizontal-positions';

export interface InputCoreProps<V extends string = InputVariant, S extends string = ComponentSize> {
	variant?: V;
	size?: S;
	disabled?: boolean;
	error?: boolean;
	class?: string;
	block?: boolean;
}

export interface InputWithLabelProps {
	label?: string;
	id?: string;
	showRequiredIndicator?: boolean;
}

export interface InputWithValidationProps {
	errors?: string[];
	showErrors?: boolean;
}

export interface InputWithHelperProps {
	helperText?: string;
	showHelperWhenError?: boolean;
}

export interface IInputBaseProps<V extends string = InputVariant, S extends string = ComponentSize>
	extends InputCoreProps<V, S>,
		InputWithLabelProps,
		InputWithValidationProps,
		InputWithHelperProps,
		Omit<HTMLInputAttributes, 'size' | 'class' | 'disabled' | 'id' | 'autocomplete'> {
	type?: HTMLInputAttributes['type'];
	value?: string;
	placeholder?: string;
	min?: number | string;
	max?: number | string;
	step?: number | string;
	autofocus?: boolean;
	autocomplete?: HTMLInputAttributes['autocomplete'];
	name?: string;
	pattern?: string;
	maxlength?: number;
	minlength?: number;
	readonly?: boolean;
	required?: boolean;
}

export interface ITextareaProps
	extends InputCoreProps<InputVariant, ComponentSize>,
		InputWithLabelProps,
		InputWithValidationProps,
		InputWithHelperProps,
		Omit<HTMLTextareaAttributes, 'class' | 'disabled' | 'id' | 'autocomplete'> {
	value?: string;
	placeholder?: string;
	rows?: number;
	autocomplete?: HTMLTextareaAttributes['autocomplete'];
	name?: string;
	maxlength?: number;
	minlength?: number;
	readonly?: boolean;
	required?: boolean;
	autoResize?: boolean;
}

export interface IInputEmailProps extends Omit<IInputBaseProps, 'type'> {
	autocomplete?: 'email' | 'off' | 'on';
}

export interface IInputPasswordProps extends Omit<IInputBaseProps, 'type'> {
	showPassword?: boolean;
	allowTogglePassword?: boolean;
	showPasswordStrength?: boolean;
}

export interface IInputGroupProps
	extends Omit<IInputBaseProps, 'type'>,
		InputLabelProps,
		InputValueProps {
	buttonLabel?: string;
	buttonVariant?: DefaultVariants;
	buttonDisabled?: boolean;
	onButtonClick?: () => void;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
}

export interface IInputLongProps extends Omit<IInputBaseProps, 'type'> {
	rows?: number;
	autoResize?: boolean;
	maxHeight?: string;
}

export interface IInputDoubleProps {
	label1?: string;
	label2?: string;
	id1?: string;
	id2?: string;
	value1?: string;
	value2?: string;
	placeholder1?: string;
	placeholder2?: string;
	type1?: HTMLInputAttributes['type'];
	type2?: HTMLInputAttributes['type'];
	disabled1?: boolean;
	disabled2?: boolean;
	errors1?: string[];
	errors2?: string[];
	required1?: boolean;
	required2?: boolean;
	variant?: InputVariant;
	size?: ComponentSize;
	class?: string;
}

export interface InputHelperProps<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp,
		ContentProp {}

export interface InputHelperChildrenProps<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp,
		ChildrenProp {}

export interface IFormErrorMessageProps extends InputHelperProps<HTMLParagraphElement> {
	text?: string;
	visible?: boolean;
}

export interface IFormHelperTextProps extends InputHelperProps<HTMLParagraphElement> {
	text?: string;
	variant?: InputVariant;
}

export interface ICharacterCountProps extends InputHelperProps<HTMLDivElement> {
	current?: number;
	max?: number;
	showPercentage?: boolean;
}
export interface IInputAddonProps extends InputHelperChildrenProps<HTMLDivElement> {
	position?: InputAddonPosition;
	variant?: AppearanceStyle;
}

export interface IPinInputDigitProps extends HtmlAttributesBase<HTMLInputElement> {
	value?: string;
	focused?: boolean;
	invalid?: boolean;
}

export interface IInputFieldProps extends IInputBaseProps {
	helperText?: string;
}

export interface IAdvancedInputProps {
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



