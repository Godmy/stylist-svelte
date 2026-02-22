import type { Snippet } from 'svelte';

import type { BadgeType } from '../../tokens/information/badge';
import type { BadgeVariant, CodeBlockSize, CodeBlockVariant } from '../../tokens';
import type { CommonSize, NeutralVariant, SemanticVariant } from '../../tokens/architecture/variants';
import type { ContentProp, HtmlAttributesBase, HtmlAttributesWithChildren } from './common';

export interface BadgeProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	variant?: BadgeVariant;
	size?: CommonSize;
}

export interface BadgeGroupItem {
	id: string;
	label: string;
	variant?: BadgeVariant;
	size?: CommonSize;
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

export interface CodeBlockProps extends HtmlAttributesWithChildren<HTMLElement> {
	language?: string;
	variant?: CodeBlockVariant;
	size?: CodeBlockSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}

export type BaseTagVariant = SemanticVariant | NeutralVariant;

export type BaseTagSize = CommonSize;

export interface BaseTagProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: BaseTagVariant;
	size?: BaseTagSize;
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
