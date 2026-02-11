import type { Snippet } from 'svelte';

import type { Alignment, Justification, Orientation } from '../tokens/layout';
import type { TokenContainerMaxWidth, HorizontalGap } from '../classes/layout';
import type { HtmlAttributesBase } from './common';

export type SpacerAxis = Orientation;

export type ContainerMaxWidth = TokenContainerMaxWidth;

export interface AspectRatioProps {
	children: Snippet;
	ratio?: number;
	class?: string;
}

export interface ContainerProps {
	children: Snippet;
	maxWidth?: ContainerMaxWidth;
	class?: string;
}

export interface DividerProps {
	orientation?: Orientation;
	label?: string;
	align?: Alignment;
	dashed?: boolean;
	class?: string;
}

export interface SpacerProps {
	axis?: Orientation;
	size?: string | number;
	class?: string;
}

export interface HorizontalLayoutProps extends HtmlAttributesBase<HTMLDivElement> {
	children: Snippet;
	gap?: HorizontalGap;
	alignItems?: Alignment;
	justifyContent?: Justification;
	wrap?: boolean;
}

export type GridItemContent = Snippet | string;

export type GridItem = {
	id: string;
	content: GridItemContent;
	colSpan?: number;
	rowSpan?: number;
	class?: string;
};

export interface GridLayoutProps extends HtmlAttributesBase<HTMLDivElement> {
	items: GridItem[];
	columns?: string;
	gap?: string;
	itemClass?: string;
}
