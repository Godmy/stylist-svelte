import type { Snippet } from 'svelte';

import type { Justification, Orientation } from '../../tokens/architecture/layout';
import type { SpacerSize } from '../../tokens/architecture/sizes';
import type { StackAlign, HtmlAttributesWithChildren } from '../information/common';

export interface StackProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	direction?: Orientation;
	spacing?: SpacerSize | string | number;
	align?: StackAlign;
	justify?: Justification;
	children?: Snippet;
}
