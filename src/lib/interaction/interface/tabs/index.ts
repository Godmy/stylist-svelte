import type { HTMLButtonAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { ChildrenProp, HtmlAttributesBase, HtmlAttributesWithChildren, IDisableable } from '$stylist/information/type/attribute/common';

export interface TabProps extends Omit<HTMLButtonAttributes, 'disabled' | 'onclick'> {
	id: string;
	selected?: boolean;
	variant?: TokenAppearance;
	size?: TokenSize;
	class?: string;
	children?: ChildrenProp['children'];
	ariaLabel?: string;
	disabled?: boolean;
}

export interface TabIndicatorProps extends HtmlAttributesBase<HTMLDivElement> {
	left?: string;
	width?: string;
	color?: TokenAppearance;
	size?: TokenSize;
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
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
}




