import type { HTMLBlockquoteAttributes } from 'svelte/elements';
import type { ChildrenProp, ClassProp } from './common';

export interface BlockquoteProps extends Omit<HTMLBlockquoteAttributes, 'class'>, ClassProp {
	cite?: string;
	withBorder?: boolean;
	withBackground?: boolean;
	children?: ChildrenProp['children'];
}
