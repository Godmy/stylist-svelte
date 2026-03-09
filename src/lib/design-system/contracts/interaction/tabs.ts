import type { HTMLButtonAttributes } from 'svelte/elements';

import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { DefaultVariants } from '../../tokens/information/input-variants';
import type { ChildrenProp, HtmlAttributesBase, HtmlAttributesWithChildren, IDisableable } from '../information/common';

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

export type TabIndicatorColor = DefaultVariants;

export interface TabIndicatorProps extends HtmlAttributesBase<HTMLDivElement> {
	left?: string;
	width?: string;
	color?: TabIndicatorColor;
	size?: ComponentSize;
	disabled?: boolean;
}

export interface TabPanelProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	id: string;
	disabled?: boolean;
}

export type TabContainerProps = HtmlAttributesWithChildren<HTMLDivElement> & IDisableable;

export interface TabsProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	selectedId?: string;
	onValueChange?: (id: string) => void;
	variant?: DefaultVariants;
	size?: ComponentSize;
	disabled?: boolean;
}







