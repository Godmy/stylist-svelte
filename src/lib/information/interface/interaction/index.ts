import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type {
	HtmlAttributesBase,
	HtmlAttributesWithChildren,
	HtmlStateAttr,
	HtmlVariantSizeAttr
} from '$stylist/information/type/attribute/common';

export interface ToolbarInteractiveProps {
	variant?: TokenAppearance;
	size?: TokenSize;
	active?: boolean;
	disabled?: boolean;
}

export interface ToolbarFieldProps {
	variant?: TokenAppearance;
	size?: TokenSize;
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
	variant?: TokenAppearance;
	size?: TokenSize;
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
	orientation?: TokenOrientation;
	onValueInput?: (value: number) => void;
	onValueChange?: (value: number) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: number) => void;
}

export interface ToolbarProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: TokenAppearance;
	size?: TokenSize;
	orientation?: TokenOrientation;
	disabled?: boolean;
	collapsible?: boolean;
	collapsed?: boolean;
}

export interface ToolbarGroupProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: TokenAppearance;
	size?: TokenSize;
	orientation?: TokenOrientation;
}

export interface ToolbarSeparatorProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T> {
	orientation?: TokenOrientation;
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





