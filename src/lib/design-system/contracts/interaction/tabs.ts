import type { HTMLButtonAttributes } from 'svelte/elements';

import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { DefaultVariants } from '$stylist/design-system/tokens/interaction/variants';
import type { ChildrenProp, HtmlAttributesBase, HtmlAttributesWithChildren, IDisableable } from '$stylist/design-system/contracts/information/common';

export interface TabProps extends Omit<HTMLButtonAttributes, 'disabled' | 'onclick'> {
	id: string;
	selected?: boolean;
	variant?: DefaultVariants;
	size?: ComponentSize;
	class?: string;
	children?: ChildrenProp['children'];
	ariaLabel?: string;
	disabled?: boolean;
}

export interface TabIndicatorProps extends HtmlAttributesBase<HTMLDivElement> {
	left?: string;
	width?: string;
	color?: DefaultVariants;
	size?: ComponentSize;
	disabled?: boolean;
}

export interface TabPanelProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	id: string;
	disabled?: boolean;
}


export interface TabContainerProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	disabled?: boolean;
}

export interface TabsProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	selectedId?: string;
	onValueChange?: (id: string) => void;
	variant?: DefaultVariants;
	size?: ComponentSize;
	disabled?: boolean;
}



