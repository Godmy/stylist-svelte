import type { Snippet } from 'svelte';

import type { TokenSoftwareBadge } from '$stylist/design-system/tokens/information/software-badge';
import type { TokenCodeView } from '$stylist/design-system/tokens/information/code-view';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { ContentProp, HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/design-system/contracts/information/common';

export interface BadgeProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	variant?: TokenAppearance;
	size?: TokenSize;
}

export interface BadgeGroupItem {
	id: string;
	label: string;
	variant?: TokenAppearance;
	size?: TokenSize;
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
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}

export interface BaseTagProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: TokenAppearance;
	size?: TokenSize;
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
	type: TokenSoftwareBadge;
	label?: string;
	class?: string;
	value?: string;
	link?: string;
}











