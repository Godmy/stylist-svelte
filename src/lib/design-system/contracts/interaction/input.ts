import type { HTMLAttributes } from 'svelte/elements';

import type { CompactSize } from '../../tokens/architecture/sizes';
import type { AppearanceStyle, DefaultVariants, InputVariant } from '../../tokens/architecture/variants';
import type {
	CharacterCountVariant,
	ChildrenProp,
	ClassProp,
	ContentProp,
	HtmlAttributesBase,
	InputAddonVariant,
	InputAttributesBase,
	InputFieldBaseProps,
	InputFieldRequiredProps,
	InputHtmlType,
	InputLabelProps,
	InputValidationProps,
	InputValueProps,
	PinInputVariant,
	TextInputBaseProps
} from '../information/common';

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

export type InputAddonPosition = 'left' | 'right';

export interface IInputAddonProps extends InputHelperChildrenProps<HTMLDivElement> {
	position?: InputAddonPosition;
	variant?: AppearanceStyle;
}

export interface IInputGroupProps
	extends Omit<HtmlAttributesBase<HTMLDivElement>, keyof InputLabelProps | keyof InputValueProps>,
		InputLabelProps,
		InputValueProps {
	buttonLabel?: string;
	buttonVariant?: DefaultVariants;
	buttonDisabled?: boolean;
	onButtonClick?: () => void;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
}

export interface IInputProps
	extends Omit<HtmlAttributesBase<HTMLInputElement>, keyof InputFieldRequiredProps>,
		InputFieldRequiredProps {
	type?: InputHtmlType;
	min?: number;
	max?: number;
	step?: number;
}

export interface ITextareaProps
	extends Omit<HtmlAttributesBase<HTMLTextAreaElement>, keyof InputFieldRequiredProps>,
		InputFieldRequiredProps {
	rows?: number;
	maxlength?: number;
}

export interface IPinInputDigitProps extends HtmlAttributesBase<HTMLInputElement> {
	value?: string;
	focused?: boolean;
	invalid?: boolean;
}

export interface IInputFieldProps extends IInputProps {
	helperText?: string;
}

export interface InputProps {
	variant?: InputVariant;
	size?: CompactSize;
	disabled?: boolean;
	error?: boolean;
	class?: string;
	children?: ChildrenProp['children'];
}

export interface IAdvancedInputProps {
	label?: string;
	value?: string;
	placeholder?: string;
	type?: string;
	disabled?: boolean;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	/** @deprecated use onValueInput */
	onInput?: (value: string) => void;
	class?: string;
}

export type {
	InputFieldBaseProps,
	InputFieldRequiredProps,
	InputLabelProps,
	InputValueProps,
	InputValidationProps,
	InputAttributesBase,
	TextInputBaseProps,
	InputAddonVariant,
	CharacterCountVariant,
	PinInputVariant
};
