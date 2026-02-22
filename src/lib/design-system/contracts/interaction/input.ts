import type { HTMLInputAttributes, HTMLTextareaAttributes, HTMLAttributes } from 'svelte/elements';

import type { CompactSize, ComponentSize } from '../../tokens/architecture/sizes';
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

// ============================================================================
// Base Input Interfaces
// ============================================================================

/**
 * Базовые props для всех input-компонентов
 */
export interface InputCoreProps<V extends string = InputVariant, S extends string = CompactSize> {
	/** Визуальный стиль input */
	variant?: V;
	/** Размер input */
	size?: S;
	/** Отключен ли input */
	disabled?: boolean;
	/** Состояние ошибки */
	error?: boolean;
	/** Дополнительные CSS классы */
	class?: string;
	/** Блочный режим (width: 100%) */
	block?: boolean;
}

/**
 * Props для input с label
 */
export interface InputWithLabelProps {
	/** Текст лейбла */
	label?: string;
	/** ID для связи label и input */
	id?: string;
	/** Показывать индикатор обязательного поля */
	showRequiredIndicator?: boolean;
}

/**
 * Props для input с валидацией
 */
export interface InputWithValidationProps {
	/** Массив сообщений об ошибках */
	errors?: string[];
	/** Показывать ошибки */
	showErrors?: boolean;
}

/**
 * Props для input с helper text
 */
export interface InputWithHelperProps {
	/** Вспомогательный текст */
	helperText?: string;
	/** Показывать helper text только когда нет ошибок */
	showHelperWhenError?: boolean;
}

// ============================================================================
// Base Input Component Props
// ============================================================================

/**
 * Props для базового Input компонента
 */
export interface IInputBaseProps<V extends string = InputVariant, S extends string = CompactSize>
	extends InputCoreProps<V, S>,
		InputWithLabelProps,
		InputWithValidationProps,
		InputWithHelperProps,
		Omit<HTMLInputAttributes, 'size' | 'class' | 'disabled' | 'id' | 'autocomplete'> {
	/** Тип input */
	type?: InputHtmlType;
	/** Значение input (поддерживает two-way binding) */
	value?: string;
	/** Placeholder текст */
	placeholder?: string;
	/** Минимальное значение (для number) */
	min?: number | string;
	/** Максимальное значение (для number) */
	max?: number | string;
	/** Шаг изменения значения (для number) */
	step?: number | string;
	/** Автофокус */
	autofocus?: boolean;
	/** Автозаполнение */
	autocomplete?: HTMLInputAttributes['autocomplete'];
	/** Имя поля */
	name?: string;
	/** Паттерн валидации */
	pattern?: string;
	/** Максимальная длина */
	maxlength?: number;
	/** Минимальная длина */
	minlength?: number;
	/** Только для чтения */
	readonly?: boolean;
	/** Обязательное поле */
	required?: boolean;
}

/**
 * Props для Textarea компонента
 */
export interface ITextareaProps
	extends InputCoreProps<InputVariant, ComponentSize>,
		InputWithLabelProps,
		InputWithValidationProps,
		InputWithHelperProps,
		Omit<HTMLTextareaAttributes, 'class' | 'disabled' | 'id' | 'autocomplete'> {
	/** Значение textarea */
	value?: string;
	/** Placeholder текст */
	placeholder?: string;
	/** Количество строк */
	rows?: number;
	/** Автозаполнение */
	autocomplete?: HTMLTextareaAttributes['autocomplete'];
	/** Имя поля */
	name?: string;
	/** Максимальная длина */
	maxlength?: number;
	/** Минимальная длина */
	minlength?: number;
	/** Только для чтения */
	readonly?: boolean;
	/** Обязательное поле */
	required?: boolean;
	/** Автоматическое изменение размера */
	autoResize?: boolean;
}

// ============================================================================
// Specialized Input Props
// ============================================================================

/**
 * Props для InputEmail
 */
export interface IInputEmailProps extends Omit<IInputBaseProps, 'type'> {
	/** Автозаполнение для email */
	autocomplete?: 'email' | 'off' | 'on';
}

/**
 * Props для InputPassword
 */
export interface IInputPasswordProps extends Omit<IInputBaseProps, 'type'> {
	/** Показывать/скрывать пароль */
	showPassword?: boolean;
	/** Разрешить переключение видимости */
	allowTogglePassword?: boolean;
	/** Индикатор сложности пароля */
	showPasswordStrength?: boolean;
}

/**
 * Props для InputGroup (input с кнопкой)
 */
export interface IInputGroupProps
	extends Omit<IInputBaseProps, 'type'>,
		InputLabelProps,
		InputValueProps {
	/** Текст кнопки */
	buttonLabel?: string;
	/** Вариант кнопки */
	buttonVariant?: DefaultVariants;
	/** Кнопка отключена */
	buttonDisabled?: boolean;
	/** Обработчик клика по кнопке */
	onButtonClick?: () => void;
	/** Обработчик изменения значения */
	onValueInput?: (value: string) => void;
	/** Обработчик потери фокуса с изменением */
	onValueChange?: (value: string) => void;
}

/**
 * Props для InputLong (многострочный input)
 */
export interface IInputLongProps extends Omit<IInputBaseProps, 'type'> {
	/** Количество строк */
	rows?: number;
	/** Автоматическое изменение размера */
	autoResize?: boolean;
	/** Максимальная высота */
	maxHeight?: string;
}

/**
 * Props для InputDouble (два input в ряд)
 */
export interface IInputDoubleProps {
	/** Лейбл для первого input */
	label1?: string;
	/** Лейбл для второго input */
	label2?: string;
	/** ID для первого input */
	id1?: string;
	/** ID для второго input */
	id2?: string;
	/** Значение первого input */
	value1?: string;
	/** Значение второго input */
	value2?: string;
	/** Placeholder для первого input */
	placeholder1?: string;
	/** Placeholder для второго input */
	placeholder2?: string;
	/** Тип первого input */
	type1?: InputHtmlType;
	/** Тип второго input */
	type2?: InputHtmlType;
	/** Отключен ли первый input */
	disabled1?: boolean;
	/** Отключен ли второй input */
	disabled2?: boolean;
	/** Ошибки первого input */
	errors1?: string[];
	/** Ошибки второго input */
	errors2?: string[];
	/** Обязательное ли первое поле */
	required1?: boolean;
	/** Обязательное ли второе поле */
	required2?: boolean;
	/** Общий variant */
	variant?: InputVariant;
	/** Общий size */
	size?: CompactSize;
	/** Общий класс */
	class?: string;
}

// ============================================================================
// Helper Components Props
// ============================================================================

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
	/** @deprecated use onValueInput */
	onInput?: (value: string) => void;
	class?: string;
}

// ============================================================================
// Type Exports
// ============================================================================

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

