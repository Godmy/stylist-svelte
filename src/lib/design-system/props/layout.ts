import type { Snippet } from 'svelte';

import type { Alignment, Justification, Orientation } from '../tokens/layout';
import type { TokenContainerMaxWidth, HorizontalGap } from '../classes/layout';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from './common';
import type { SpacerSize } from '../tokens/sizes';

// Re-export from source files to avoid duplicates
export type { AspectRatioProps } from './aspect-ratio';
export type { DividerProps } from './divider';
export type { SpacerProps } from './spacer';
export type { HorizontalLayoutProps } from './layout-extended';

export type SpacerAxis = Orientation;

export type ContainerMaxWidth = TokenContainerMaxWidth;

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
