import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { DefaultVariants } from '$stylist/design-system/tokens/information/default-variants';
import type {
	InteractionState,
	LoadingState,
	ValidationState,
	VisibilityState
} from '$stylist/design-system/tokens/interaction/states';

export type {
	GraphEdgeType,
	Density,
	Skeleton,
	TableCell,
} from '$stylist/design-system/tokens';

export interface ClassProp {
	class?: string;
}

export interface ChildrenProp {
	children?: Snippet;
}

export interface ContentProp {
	content?: Snippet;
}

export interface TypographyTextProps {
	variant?: string;
	size?: ComponentSize;
	disabled?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
}

export interface HtmlAttributesBase<T extends EventTarget = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp {}

export interface HtmlAttributesWithChildren<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T>,
		ChildrenProp {}

export interface HtmlAttributesWithContent<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T>,
		ContentProp {}

export interface HtmlStateAttr {
	disabled?: boolean;
	required?: boolean;
	readonly?: boolean;
	error?: boolean;
}

export interface HtmlVariantSizeAttr {
	variant?: DefaultVariants;
	size?: ComponentSize;
}

export type ValueChangeHandler<T> = (value: T) => void;

export interface InputLabelProps {
	id?: string;
	label?: string;
}

export interface InputValueProps {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
}

export interface InputValidationProps {
	required?: boolean;
	errors?: string[];
}

export interface InputFieldBaseProps extends InputLabelProps, InputValueProps, InputValidationProps {
	name?: string;
}

export interface InputFieldRequiredProps extends InputFieldBaseProps {
	id: string;
	label: string;
}

export interface InputAttributesBase extends Omit<import('svelte/elements').HTMLInputAttributes, 'class'>, ClassProp {}

export interface TextInputBaseProps extends InputAttributesBase {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
	helpText?: string;
}

export interface IVariant<T extends string = string> {
	variant?: T;
}

export interface ISize<T extends string = string> {
	size?: T;
}

export interface IStyleable<V extends string = string, S extends string = string>
	extends IVariant<V>,
		ISize<S> {
	class?: string;
}

export interface IDisableable {
	disabled?: boolean;
}

export interface ILoadable {
	loading?: boolean;
}

export interface IClickable {
	onclick?: (event: MouseEvent) => void;
}

export interface Props
	extends IDisableable,
		ILoadable,
		IClickable,
		IStyleable<DefaultVariants, ComponentSize> {
	class?: string;
	ariaLabel?: string;
	block?: boolean;
	loadingLabel?: string;
	children?: Snippet;
	icon?: string | Snippet;
}

export interface StateProps {
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	readonly?: boolean;
	required?: boolean;
	hidden?: boolean;
	visible?: boolean;
	focused?: boolean;
	hovered?: boolean;
	active?: boolean;
	selected?: boolean;
	checked?: boolean;
	indeterminate?: boolean;
	expanded?: boolean;
	collapsed?: boolean;
	open?: boolean;
	closed?: boolean;
	pending?: boolean;
	success?: boolean;
	warning?: boolean;
	info?: boolean;
	primary?: boolean;
	secondary?: boolean;
	block?: boolean;
	inline?: boolean;
	sticky?: boolean;
	fixed?: boolean;
	absolute?: boolean;
	relative?: boolean;
}

export interface StateStyleProps {
	disabledStyle?: string;
	loadingStyle?: string;
	errorStyle?: string;
	readonlyStyle?: string;
	successStyle?: string;
	warningStyle?: string;
	primaryStyle?: string;
	secondaryStyle?: string;
}

export interface ComponentStateProps extends StateProps, StateStyleProps {}

export type {
	InteractionState,
	LoadingState,
	ValidationState,
	VisibilityState
};
