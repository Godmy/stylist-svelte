import type { Snippet } from 'svelte';

import type { BadgeType } from '$stylist/design-system/tokens/information/badge';
import type { Code as CodeToken } from '$stylist/design-system/tokens/architecture/code';
import type { DefaultVariants, NeutralVariant } from '$stylist/design-system/tokens/information/default-variants';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { ContentProp, HtmlAttributesBase, HtmlAttributesWithChildren } from './common';

export type Code = CodeToken;

export interface BadgeProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	variant?: DefaultVariants;
	size?: ComponentSize;
}

export interface BadgeGroupItem {
	id: string;
	label: string;
	variant?: DefaultVariants;
	size?: ComponentSize;
	disabled?: boolean;
	onClick?: () => void;
}

export interface BadgeGroupProps extends HtmlAttributesBase<HTMLDivElement> {
	badges: BadgeGroupItem[];
	maxVisible?: number;
	showOverflow?: boolean;
	badgeClass?: string;
	overflowClass?: string;
}

export interface CodeProps extends HtmlAttributesWithChildren<HTMLElement> {
	language?: string;
	variant?: Code;
	size?: ComponentSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}

export interface BaseTagProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: DefaultVariants | NeutralVariant;
	size?: ComponentSize;
	closable?: boolean;
	disabled?: boolean;
}

export interface TagProps extends BaseTagProps<HTMLSpanElement>, ContentProp {
	text?: string;
	icon?: Snippet;
	onClose?: () => void;
}

export interface ChipProps extends BaseTagProps<HTMLDivElement>, ContentProp {
	label?: string;
	text?: string;
	icon?: Snippet;
}

export interface NpmBadgeProps {
	type: BadgeType;
	label?: string;
	class?: string;
	value?: string;
	link?: string;
}






