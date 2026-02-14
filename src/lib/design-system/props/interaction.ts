import type { ComponentSize } from '../tokens/sizes';
import type { Orientation } from '../tokens/layout';
import type { BaseTagVariant } from './badge';
import type {
	HtmlAttributesBase,
	HtmlAttributesWithChildren,
	HtmlStateAttr,
	HtmlVariantSizeAttr,
	ValueChangeHandler
} from './common';

export type ToolbarVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'neutral'
	| 'dark'
	| 'light';

export interface ToolbarInteractiveProps {
	variant?: ToolbarVariant;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	active?: boolean;
	disabled?: boolean;
}

export interface ToolbarFieldProps {
	variant?: ToolbarVariant;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	disabled?: boolean;
}

export interface ControlProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	value?: unknown;
	onChange?: ValueChangeHandler<unknown>;
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
	onChange?: ValueChangeHandler<string>;
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
	onChange?: ValueChangeHandler<string>;
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
	onChange?: ValueChangeHandler<string>;
	onFocus?: () => void;
	onBlur?: () => void;
}

export type SelectVariant = BaseTagVariant;

export type SelectSize = ComponentSize;

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps extends HtmlAttributesWithChildren<HTMLElement>, HtmlStateAttr {
	options: SelectOption[];
	value?: string;
	defaultValue?: string;
	variant?: SelectVariant;
	size?: SelectSize;
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
	/** @deprecated use onValueChange */
	onSortChange?: (option: string) => void;
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
	orientation?: 'horizontal' | 'vertical';
	onValueInput?: ValueChangeHandler<number>;
	onValueChange?: ValueChangeHandler<number>;
	/** @deprecated use onValueChange */
	onChange?: ValueChangeHandler<number>;
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

export type ToolbarInteractiveItemProps<T extends EventTarget = HTMLElement> =
	HtmlAttributesWithChildren<T> & ToolbarInteractiveProps;

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

export type ToolbarFieldItemProps<T extends EventTarget = HTMLElement> =
	HtmlAttributesWithChildren<T> & ToolbarFieldProps;

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
