import type { Snippet } from 'svelte';

import type { Alignment, Justification, Orientation } from '../../tokens/architecture/layout';
import type { TokenContainerMaxWidth, HorizontalGap } from '../../classes/architecture/layout';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '../information/common';
import type { SpacerSize } from '../../tokens/architecture/sizes';

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
