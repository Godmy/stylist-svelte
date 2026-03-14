import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';

import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { HtmlAttributesWithChildren } from '../information/common';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';
import type { ToggleGroupType } from '$stylist/design-system/tokens/interaction/selection-type';

export interface ToggleGroupRootProps
	extends Omit<HTMLButtonAttributes, 'size' | 'class' | 'type'> {
	value?: string;
	disabled?: boolean;
	orientation?: Orientation;
	type?: ToggleGroupType;
	class?: string;
	onValueChange?: (event: CustomEvent<{ value: string | string[] | null }>) => void;
}

export interface ToggleGroupItemProps extends Omit<HTMLButtonAttributes, 'class'> {
	value: string;
	disabled?: boolean;
	class?: string;
}

export interface ToggleBaseProps {
	disabled?: boolean;
	class?: string;
	size?: ComponentSize;
}

export interface ToggleInputProps
	extends Omit<HTMLInputAttributes, 'size' | 'disabled' | 'checked' | 'class'>,
		ToggleBaseProps {
	checked?: boolean;
}

export interface ToggleProps extends ToggleInputProps {
	toggleSize?: ComponentSize;
}

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
	orientation?: Orientation;
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
	onValueInput?: (value: number) => void;
	onValueChange?: (value: number) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: number) => void;
	class?: string;
}

export interface AdvancedToggleProps extends ToggleBaseProps {
	label?: string;
	checked?: boolean;
	onValueInput?: (value: boolean) => void;
	onValueChange?: (value: boolean) => void;
	onChange?: (value: boolean) => void;
}

export interface DarkModeToggleProps extends ToggleBaseProps {
	checked?: boolean;
	darkMode?: boolean;
	currentTheme?: 'light' | 'dark' | 'system';
	showLabels?: boolean;
	onToggle?: (payload: { darkMode: boolean }) => void;
	onThemeChange?: (theme: 'light' | 'dark' | 'system') => void;
}




