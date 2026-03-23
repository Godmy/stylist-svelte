import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';

import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { HtmlAttributesWithChildren } from '$stylist/design-system/contracts/information/common';
import type { TokenOrientation } from '$stylist/design-system/tokens/architecture/orientation';
import type { TokenSelectionType } from '$stylist/design-system/tokens/interaction/selection-type';

export interface ToggleGroupRootProps
	extends Omit<HTMLButtonAttributes, 'size' | 'class' | 'type'> {
	value?: string;
	disabled?: boolean;
	orientation?: TokenOrientation;
	type?: TokenSelectionType;
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
	size?: TokenSize;
}

export interface ToggleInputProps
	extends Omit<HTMLInputAttributes, 'size' | 'disabled' | 'checked' | 'class'>,
		ToggleBaseProps {
	checked?: boolean;
}

export interface ToggleProps extends ToggleInputProps {
	toggleSize?: TokenSize;
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
	orientation?: TokenOrientation;
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





