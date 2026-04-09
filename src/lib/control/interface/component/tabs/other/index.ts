import type { HTMLButtonAttributes, HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';

export interface TabProps extends Omit<HTMLButtonAttributes, 'disabled' | 'onclick'> {
	id: string;
	selected?: boolean;
	variant?: TokenAppearance;
	size?: TokenSize;
	class?: string;
	children?: Snippet<[]>;
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




