import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';
import type { DefaultVariants, NeutralVariant } from '$stylist/design-system/tokens/interaction/variants';
import type {
	HtmlAttributesBase,
	HtmlAttributesWithChildren,
	HtmlStateAttr,
	HtmlVariantSizeAttr
} from './common';
import type { ToolbarVariant } from '../../tokens/interaction/toolbar';

export interface ToolbarInteractiveProps {
	variant?: ToolbarVariant;
	size?: ComponentSize;
	active?: boolean;
	disabled?: boolean;
}

export interface ToolbarFieldProps {
	variant?: ToolbarVariant;
	size?: ComponentSize;
	disabled?: boolean;
}

export interface ControlProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	value?: unknown;
	onValueInput?: (value: unknown) => void;
	onValueChange?: (value: unknown) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: unknown) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	onKeyDown?: (event: KeyboardEvent) => void;
	onKeyUp?: (event: KeyboardEvent) => void;
}

export interface InputControlProps
	extends HtmlAttributesBase<HTMLElement>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	id?: string;
	name?: string;
	value?: string;
	placeholder?: string;
	type?: string;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
}

export interface TextAreaControlProps
	extends HtmlAttributesBase<HTMLElement>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	id?: string;
	name?: string;
	value?: string;
	placeholder?: string;
	rows?: number;
	cols?: number;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
}

export interface SelectControlProps
	extends HtmlAttributesBase<HTMLElement>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	id?: string;
	name?: string;
	value?: string;
	options?: Array<{ value: string; label: string }>;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
}

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps extends HtmlAttributesWithChildren<HTMLElement>, HtmlStateAttr {
	options: SelectOption[] | string[];
	value?: string;
	defaultValue?: string;
	variant?: DefaultVariants | NeutralVariant;
	size?: ComponentSize;
	placeholder?: string;
	searchable?: boolean;
	multiple?: boolean;
}

export interface SortProps extends SelectProps {
	sortDirection?: 'asc' | 'desc';
	onSortDirectionChange?: (direction: 'asc' | 'desc') => void;
}

export interface ProductSortProps extends SortProps {
	selectedOption?: string;
	onValueChange?: (option: string) => void;
}

export interface SliderTickProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	value?: number;
	position?: number;
	active?: boolean;
	label?: string;
}

export interface SliderProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	orientation?: Orientation;
	onValueInput?: (value: number) => void;
	onValueChange?: (value: number) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: number) => void;
}

export interface ToolbarProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: ToolbarVariant;
	size?: ComponentSize;
	orientation?: Orientation;
	disabled?: boolean;
	collapsible?: boolean;
	collapsed?: boolean;
}

export interface ToolbarGroupProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: ToolbarVariant;
	size?: ComponentSize;
	orientation?: Orientation;
}

export interface ToolbarSeparatorProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T> {
	orientation?: Orientation;
}

export interface PictureToolbarTool {
	id: string;
	label: string;
	icon?: string;
}

export interface PictureToolbarProps {
	tools: PictureToolbarTool[];
	onToolSelect?: (tool: string) => void;
	activeTool?: string;
	class?: string;
}

export interface ProductSortOption {
	value: string;
	label: string;
}




