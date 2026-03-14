import type { Snippet } from 'svelte';

import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { Justification } from '$stylist/design-system/tokens/architecture/alignments';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { HtmlAttributesWithChildren } from '../information/common';

export interface StackProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	direction?: Orientation;
	spacing?: ComponentSize | string | number;
	align?: Alignment;
	justify?: Justification;
	children?: Snippet;
}






