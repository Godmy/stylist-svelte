import type { Snippet } from 'svelte';

import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { Justification } from '$stylist/design-system/tokens/architecture/justifications';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '../information/common';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { ContainerMaxWidth, HorizontalGap, LayoutSize } from '$stylist/design-system/tokens/architecture/layout';
import type { SpacerAxis as SpacerAxisToken } from '$stylist/design-system/tokens/architecture/spacer-axis';

// Re-export from source files to avoid duplicates
export type { AspectRatioProps } from './aspect-ratio';
export type { DividerProps } from './divider';
export type { SpacerProps } from './spacer';
export type { HorizontalLayoutProps } from './layout-extended';

export type SpacerAxis = SpacerAxisToken;

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
