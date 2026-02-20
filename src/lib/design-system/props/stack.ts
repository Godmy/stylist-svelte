import type { Snippet } from 'svelte';

import type { Justification, Orientation } from '../tokens/layout';
import type { SpacerSize } from '../tokens/sizes';
import type { StackAlign, HtmlAttributesWithChildren } from './common';

export interface StackProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	direction?: Orientation;
	spacing?: SpacerSize | string | number;
	align?: StackAlign;
	justify?: Justification;
	children?: Snippet;
}
