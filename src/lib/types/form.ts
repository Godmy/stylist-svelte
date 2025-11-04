/**
 * Form-related types
 */

export type FieldType =
	| 'text'
	| 'email'
	| 'password'
	| 'number'
	| 'tel'
	| 'url'
	| 'date'
	| 'time'
	| 'select'
	| 'textarea'
	| 'checkbox'
	| 'radio';

export type ValidationError = string | string[];

export type FormErrors<T> = Partial<Record<keyof T, ValidationError>>;

export interface SelectOption {
	value: string | number;
	label: string;
	disabled?: boolean;
}
