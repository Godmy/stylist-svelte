import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';

import type { CompactSize } from '../../tokens/architecture/sizes';
import type { HtmlAttributesWithChildren, ValueChangeHandler } from '../information/common';

export type ToggleGroupType = 'single' | 'multiple';

export interface ToggleGroupRootProps
	extends Omit<HTMLButtonAttributes, 'size' | 'class' | 'type'> {
	value?: string;
	disabled?: boolean;
	orientation?: 'horizontal' | 'vertical';
	type?: ToggleGroupType;
	class?: string;
	onValueChange?: (event: CustomEvent<{ value: string | string[] | null }>) => void;
}

export interface ToggleGroupItemProps extends Omit<HTMLButtonAttributes, 'class'> {
	value: string;
	disabled?: boolean;
	class?: string;
}

export type ToggleSize = CompactSize;

export interface ToggleBaseProps {
	disabled?: boolean;
	class?: string;
	size?: ToggleSize;
}

export interface ToggleInputProps
	extends Omit<HTMLInputAttributes, 'size' | 'disabled' | 'checked' | 'class'>,
		ToggleBaseProps {
	checked?: boolean;
}

export interface ToggleProps extends ToggleInputProps {
	toggleSize?: ToggleSize;
}

// Re-export from source file to avoid duplicates
export type { SwitchProps } from './switch';

export interface CheckboxProps extends ToggleInputProps {
	id?: string;
	label?: string;
	description?: string;
	errors?: string[];
	required?: boolean;
	indeterminate?: boolean;
}

export interface RadioProps extends ToggleInputProps {
	value: string;
	label?: string;
}

export interface RadioButtonGroupProps
	extends Omit<
		HtmlAttributesWithChildren<HTMLDivElement>,
		'size' | 'class' | 'onchange' | 'oninput'
	> {
	value?: string;
	disabled?: boolean;
	orientation?: 'horizontal' | 'vertical';
	options: Array<{ value: string; label: string; disabled?: boolean }>;
	optionClass?: string;
	labelClass?: string;
	radioClass?: string;
	name?: string;
	class?: string;
	required?: boolean;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
}

export interface ActionSegmentedControlProps {
	items: string[];
	selectedIndex?: number;
	onValueInput?: ValueChangeHandler<number>;
	onValueChange?: ValueChangeHandler<number>;
	/** @deprecated use onValueChange */
	onChange?: ValueChangeHandler<number>;
	class?: string;
}

export interface AdvancedToggleProps extends ToggleBaseProps {
	label?: string;
	checked?: boolean;
	onValueInput?: ValueChangeHandler<boolean>;
	onValueChange?: ValueChangeHandler<boolean>;
	onChange?: ValueChangeHandler<boolean>;
}

export interface DarkModeToggleProps extends ToggleBaseProps {
	checked?: boolean;
	darkMode?: boolean;
	onToggle?: (payload: { darkMode: boolean }) => void;
}
