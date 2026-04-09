import type { HTMLInputAttributes, HTMLTextareaAttributes, HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type {
	ChildrenProp,
	ClassProp,
	ContentProp,
	HtmlAttributesBase
} from '$stylist/information/type/struct';
import type {
	InputAttributesBase,
	InputFieldBaseProps,
	InputFieldRequiredProps,
	InputLabelProps,
	InputValidationProps,
	InputValueProps
} from '$stylist/input/type/struct';
import type { TextInputBaseProps } from '$stylist/typography/type/struct/text-input-base-props';
export interface InputCoreProps<V extends string = TokenAppearance, S extends string = TokenSize> {
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

export interface IInputBaseProps<V extends string = TokenAppearance, S extends string = TokenSize>
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
	extends InputCoreProps<TokenAppearance, TokenSize>,
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
		Omit<InputValueProps, 'defaultValue'> {
	buttonLabel?: string;
	buttonVariant?: TokenAppearance;
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
	variant?: TokenAppearance;
	size?: TokenSize;
	class?: string;
}

export interface InputHelperProps<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp,
		ContentProp {}

export interface InputHelperChildrenProps<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp {
	children?: Snippet<[]>;
}

export interface IFormErrorMessageProps extends InputHelperProps<HTMLParagraphElement> {
	text?: string;
	visible?: boolean;
}

export interface IFormHelperTextProps extends InputHelperProps<HTMLParagraphElement> {
	text?: string;
	variant?: TokenAppearance;
}

export interface ICharacterCountProps extends InputHelperProps<HTMLDivElement> {
	current?: number;
	max?: number;
	showPercentage?: boolean;
}
export interface IInputAddonProps extends InputHelperChildrenProps<HTMLDivElement> {
	position?: TokenAlignment;
	variant?: TokenAppearance;
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


