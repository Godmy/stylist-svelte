import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { DefaultVariants } from '$stylist/design-system/tokens/interaction/variants';
import type { Props, ClassProp } from '../information/common';

import type { ButtonAttributesBase, ButtonCoreProps, ButtonDomProps } from '../../types/interaction/button';
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
	icon?: string | Snippet;
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



