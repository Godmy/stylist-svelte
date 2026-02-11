import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

import type { ComponentSize } from '../tokens/sizes';
import type { DefaultVariants } from '../tokens/variants';
import type {
	ButtonAttributesBase,
	ButtonAttributesWithChildren,
	Props,
	ClassProp
} from './common';

export type ButtonElementBaseProps<TCore, TDom> = Omit<TCore, 'children'> &
	TDom & {
		class?: string;
		children?: Snippet;
	};

type ButtonDomProps = Omit<HTMLButtonAttributes, 'class' | 'disabled' | 'onclick'>;

type ButtonCoreProps = Omit<Props, 'class'>;

export type ButtonElementProps = ButtonElementBaseProps<ButtonCoreProps, ButtonDomProps>;

export interface CopyButtonProps
	extends Omit<
			ButtonCoreProps,
			'children' | 'text' | 'label' | 'successMessage' | 'showIcon' | 'onSuccess' | 'onError'
		>,
		ButtonDomProps {
	class?: string;
	text?: string;
	label?: string;
	successMessage?: string;
	showIcon?: boolean;
	children?: Snippet;
	onSuccess?: (text: string) => void;
	onError?: (error: Error) => void;
}

export interface IconButtonProps extends Omit<ButtonCoreProps, 'children' | 'icon'>, ButtonDomProps {
	class?: string;
	icon?: Snippet;
	children?: Snippet;
}

export interface PageButtonProps
	extends Omit<ButtonCoreProps, 'children' | 'page' | 'isActive'>,
		ButtonDomProps {
	class?: string;
	page?: number;
	isActive?: boolean;
	children?: Snippet;
}

export interface ButtonControlProps extends ButtonAttributesBase {
	variant?: DefaultVariants;
	size?: ComponentSize;
	disabled?: boolean;
	loading?: boolean;
	block?: boolean;
	onClick?: () => void;
}

export type { ButtonAttributesBase, ButtonAttributesWithChildren, ClassProp };
